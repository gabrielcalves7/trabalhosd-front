import React from "react";
import AddTask from "../AddTask";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "../Header";
import 'bootstrap/dist/css/bootstrap.min.css';
export function Home() {
  
  return (
    <div className="container">
      <Header/>
      <div className="contents">
        <h2 className="text-center">Agenda</h2>
        <div className="d-flex flex-column">
          <a href="/seeTasks">Ver tarefas</a>
          <a href="/addTask">Adicionar tarefa</a>
          <a href="/editTask">Editar tarefa</a>
        </div>
      </div>
      
    </div>
  )
}
