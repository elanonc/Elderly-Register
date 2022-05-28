import React, { useState } from 'react';
import Create from './Create';

const CreateForm = (props) => {

    const initialValues = {
        nomeCompleto: '',
        idade: '',
        aposentado: '',
        saude: '',
    }

    
    let [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        let {name, value} = e.target;

        setValues({
          ...values,
          [name]: value
        })
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      props.addEdit(values);
    }

    return (
      <form autoComplete="off" onSubmit={handleFormSubmit}>
         <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" 
                       value={values.nomeCompleto} onChange={handleInputChange} />
          </div>

        <div className="row">

        <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
            </div>
              <input className="form-control" placeholder="Idade" name="idade" 
              defaultValue={values.idade} onChange={handleInputChange} />
          </div>

            <div className="form-group input-group col-md-6">
              <div className="input-group-prepend">
                      <div className="input-group-text">
                          <i className="fas fa-envelope"></i>
                      </div>
              </div>
                <input className="form-control" placeholder="Aposentado" name="aposentado" 
                defaultValue={values.aposentado} onChange={handleInputChange}/>
            </div>

        </div>

        <div className="form-group">
          <textarea className="form-control" name="saude" placeholder="Disserte sobre a saúde do idoso" onChange={handleInputChange}></textarea>
        </div>

        <div className="form-group mt-2">
          <input type="submit" value="Salvar" className="btn btn-primary btn-block" />
        </div>

      </form>
  )
}

export default CreateForm;