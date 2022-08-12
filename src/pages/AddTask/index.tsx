import React from 'react';
import Header from "../Header";
import './styles.css'
declare module 'react' {

}
function AddTask() {
  return (
    <div className="container">
      <Header/>
      <form className="formContainer">
        <div className="c_FormInput">
          <label>Tarefa</label>
          <input type="text" className="form-control" id="task" placeholder="Digite o nome da tarefa"/>
        </div>
        <div className="c_FormInput">
          <label>Email</label>
          <input type="email" className="form-control" id="email" placeholder="Email"/>
        </div>
        <div className="c_FormInput">
          <label>Hora a ser realizada</label>
          <input type="time" className="form-control" id="time"/>
        </div>
        <div className="c_FormInput">
          <label className="w-100">Descrição</label>
          <textarea name="description" id="description" className="w-100"></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button className="submitButton">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
