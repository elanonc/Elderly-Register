import React, { useState, useEffect } from 'react';
import CreateForm from './CreateForm';
import app from '../database/firebase-app';

const Create = () => {

  const [dadosIdosos, setDadosIdosos] = useState({});

  useEffect (() => {
    app.child('idosos').on('value', dbSnapshot => {
      if (dbSnapshot.val() != null) {
        setDadosIdosos ({
          ...dbSnapshot.val()
        })
      }
    })
  }, [])

  const addEdit = (obj) => {
    app.child('idosos').push(
      obj, 
      error => {
      if (error) {
        console.log(error);
      }
    })
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Cadastro de Idosos</h1>
            <p className="lead">Cadastro de idosos da Casa do Ancião</p>
        </div>
    </div>
    <div className="row">
        <div className="col-md-6">
          <CreateForm />
        </div>
        <div className="col-md-7">
            <table className="table table-boderless table-stripped">
              <thead className="thead-light">
                <tr>
                  <td>Nome Completo</td>
                  <td>Idade</td>
                  <td>Aposentado</td>
                  <td>Saude</td>
                </tr>
              </thead>

              <tbody>
                { Object.keys(dadosIdosos).map(id => {
                  return <tr key={id}>
                            <td> {dadosIdosos[id].nomeCompleto}</td>
                            <td> {dadosIdosos[id].idade}</td>
                            <td> {dadosIdosos[id].aposentado}</td>
                            <td> {dadosIdosos[id].saude}</td>
                          </tr>
                }) }
              </tbody>
            </table>
        </div>
    </div>

    </>
    
  )
}

export default Create;