import React, {useContext} from "react";
import AddTask from "../AddTask";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Home} from "../Home";
import EditTask from "../EditTask";
import SeeTasks from "../SeeTasks";
import Register from "../Register";
import Login from "../Login";
import {AuthContext, AuthProvider} from "../../contexts/auth";

export function NavRoutes() {
  const Private = ({children}:any) => {
    const {authenticated}:any = useContext(AuthContext);
    console.log(authenticated);
    if(!authenticated) return <Route to="/login"/>
    return children
  }
  return (
    <Router>
      <AuthProvider>
        
        <Routes>
          <Route path="/" element={<Private><Home /></Private>} />
          <Route path="/addTask" element={<AddTask />} />
          <Route path="/editTask" element={<EditTask />} />
          <Route path="/seeTasks" element={<SeeTasks />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>

    </Router>
    
  )
}

export default NavRoutes;
