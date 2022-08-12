import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "../Home";
import './styles.css';

const Header = () => {
  return(
      <div className="navHeader">
        <ul className="d-flex">
          <li className="nav">
            <a className="nav-link" href="/addTask">Adicionar tarefa</a>
          </li>
          <li className="nav">
            <a className="nav-link" href="/seeTasks">Ver tarefas</a>
          </li>
          <li className="nav">
            <a className="nav-link" href="/editTask">Editar tarefa</a>
          </li>
          <li className="nav">
            <a className="nav-link" href="/register">Editar tarefa</a>
          </li>
        </ul>
      </div>
      
  )
}
export default Header;

