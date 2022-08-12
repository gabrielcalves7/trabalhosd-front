import React from 'react';
import Header from "./pages/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddTask from "./pages/AddTask";
import NavRoutes from "./pages/NavRoutes";
import {Home} from "./pages/Home";
function App() {
  return (
    <NavRoutes/>
  );
}

export default App;
