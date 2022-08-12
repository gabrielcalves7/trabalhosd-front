import React, {createContext, useState} from 'react';
import {httpRequest} from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export const AuthProvider = ({children}:any) => {
  const [user,setUser] = useState(null)
  
  const login = async (email:string,password:string) =>{
    const v_Response = await httpRequest('auth/authenticate', {email, password})
    console.log(v_Response);
    if(v_Response.error){
      let v_Error = v_Response.error;
      if(v_Error.toLowerCase() == 'user not found' || v_Error.toLowerCase() == 'invalid password'){
        let v_Alerta = v_Error.toLowerCase() == 'user not found' ? alert("Email não cadastrado") : 'Senha incorreta.';
        alert(v_Alerta)
      }
      else{
        alert("Ocorreu um erro inesperado, por favor tente novamente");
      }
    }
    else{
      await AsyncStorage.setItem('@user:',v_Response.token);
    }
  }
  const logout = () => {
    console.log("saiu");
  }
  return (
    <AuthContext.Provider
      value={{authenticated: !!user, user, login, logout}}
    >
      {children}
    </AuthContext.Provider>
  )
}
