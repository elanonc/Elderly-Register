import React, { useState, useEffect } from 'react';
import CreateForm from './CreateForm';
import app from '../database/firebase-app';

const Create = () => {

  const [dadosIdosos, setDadosIdosos] = useState({});

  const [currentId, setCurrentId] = useState('');

  useEffect (() => {
    app.child('idosos').on('value', dbSnapshot => {
      if (dbSnapshot.val() != null) {
        setDadosIdosos({
          ...dbSnapshot.val()
        })
      } else {
          setDadosIdosos([])
      }
    })
  }, [])

  const addEdit = (obj) => {
    if (currentId === "") {
      app.child("idosos").push(
        obj,
        error => {
          if(error){
            console.log(error);
          } else {
            setCurrentId('');
          }
        }
      )
    } else {
      app.child(`idosos/${currentId}`).set(
        obj, 
        error => {
          if (error) {
            console.log(error)
          }
        }
      )
    }
  }

  const onDelete = (key) => {
    if ( window.confirm("Tem certeza que deseja deletar?")) {
      app.child(`idosos/${key}`).remove(
        error => {
          if(error) {
            console.log(error)
          }
        }
      )
    }
  }

  return (
    <>

      <div class="jumbotron">
        <h1 class="display-4 text-center">Cadastro de Idosos</h1>
      </div>

      <div className="row">
        <div className="col-md-5">
          <CreateForm {...( {addEdit, currentId, dadosIdosos} )} />
        </div>

        <div className="col-md-7">
          <table className="table table-borderless table-stripped ">
            <thead className="thead-light"> 
              <tr>
                <th> Nome Completo </th>
                <th> Idade </th>
                <th> Aposentado </th>
                <th> Saude </th>
                <th> Ações </th>
              </tr>
            </thead>

            <tbody>
            {Object.keys(dadosIdosos).map( id => {
              return <tr key={id}>
                        <td> {dadosIdosos[id].nomeCompleto} </td>
                        <td> {dadosIdosos[id].idade} </td>
                        <td> {dadosIdosos[id].aposentado} </td>
                        <td> {dadosIdosos[id].saude} </td>

                        <td>
                          <a className="btn btn-primary" onClick={ () => {setCurrentId(id)} }>
                            <i className="fas fa-pencil-alt"></i>
                          </a>
                          <a className="btn btn-danger" onClick={ () => onDelete(id)}>
                            <i className="far fa-trash-alt"></i>
                          </a>
                        </td>
                      </tr>
                                    
              })
            }
            </tbody>
          </table>
        </div>
      </div>
        </>
  )
}

export default Create;