import React, {useState} from 'react';
import Header from "../Header";
import './styles.css'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { httpRequest } from '../../services/api';


function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [errors,setErrors] = useState<object|any>([]);

  const login = async () => {
    const req = httpRequest('register',{email,password});
    console.log(req);
  }
  const handleSubmit = async () => {
    let v_Errors = {};
    if(!email || !(email.split('@').length > 1)){
      let error = !email ? "Por favor, insira um email" : "Por favor, insira um email válido";
      v_Errors = {...v_Errors, emailError: error}
    }
    if(!password){
  
      let error = "Por favor, insira sua senha";
      v_Errors = {...v_Errors, passwordError: error}
  
    }
    setErrors(v_Errors);
    if(Object.keys(errors).length == 0) {
     login();
    }
    return;
  }
  const getStorage = async () => {
    const stor = await AsyncStorage.getItem(
      "@user:"
    );
  
    console.log(stor);
  }
  return (
    <div className="container">
      <h2 className="text-center mt-4">Bem vindo!</h2>
      <form className="formContainer">
        <div className="c_FormInput">
          <label>Login</label>
          <input type="email"
                 className="form-control"
                 id="task"
                 placeholder="Digite o seu email"
                 onChange={e => setEmail(e.target.value)}

          />
          {errors['emailError'] ? <p className="mt-3 alert alert-danger">{errors['emailError']}</p> : <></>}
        </div>
        <div className="c_FormInput">
          <label>Senha</label>
          <input type="password"
                 className="form-control"
                 id="email"
                 placeholder="Digite sua senha"
                 onChange={e => setPassword(e.target.value)}
          />
          {errors['passwordError'] ? <p className="mt-3 alert alert-danger">{errors['passwordError']}</p> : <></>}
    
            </div>
        <div className="d-flex justify-content-end">
          <p className="submitButton" onClick={handleSubmit}>Entrar</p>
          <p className="submitButton" onClick={getStorage}>get</p>
        </div>
        <h2>Pass:{password}</h2>
  
        <h2>mail:{email}</h2>


      </form>
    </div>
  );
}

export default Login;
