import React, { useState, useEffect } from 'react';

const CreateForm = (props) => {

    const initialValues = {
        nomeCompleto: '',
        idade: '',
        aposentado: '',
        saude: '',
    }

    
    let [values, setValues] = useState(initialValues);

    useEffect( () => {
      if(props.currentId === '') {
          setValues({
              ...initialValues
          })
      } else {
          setValues({
              ...props.dadosIdosos[props.currentId]
          })
      }
    }, [props.currentId, props.dadosIdosos] )


    const handleInputChange = (e) => {
        let {name, value} = e.target;

        setValues({
          ...values,
          [name]: value
        })
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      e.target.reset();
      props.addEdit(values);
    }
    
    return (
      <form id="elderly-form" autoComplete="off" onSubmit={handleFormSubmit}>
         <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" placeholder="Nome Completo" name="nomeCompleto" 
                       value={values.nomeCompleto} onChange={handleInputChange} />
          </div>

        <div className="form-row">

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
                <select className="form-control" placeholder="Aposentado" name="aposentado" 
                        defaultValue={values.aposentado} onChange={handleInputChange}>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                  <option value=""></option>
                </select>
              </div>

        </div>

        <div className="form-group">
          <textarea className="form-control" name="saude" placeholder="Disserte sobre a saúde do idoso" 
                    onChange={handleInputChange}/>
        </div>

        <div className="form-group mt-2">
          <input type="submit" value={props.currentId === '' ? "Salvar" : "Atualizar"} 
                className="btn btn-primary btn-block" />
        </div>

      </form>
  )
}

export default CreateForm;