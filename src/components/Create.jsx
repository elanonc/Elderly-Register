import React from 'react';
import CreateForm from './CreateForm';
import app from '../database/firebase';

const Create = () => {

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
        <div>
            <h2>Lista de pacientes</h2>
        </div>
    </div>

    </>
    
  )
}

export default Create;