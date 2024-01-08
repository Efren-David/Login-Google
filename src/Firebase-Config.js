import React, {useState, useEffect} from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
//import GoogleAuthButton from './Auth-Google'
import './Login.css'
import AuthButton from './facebook';




const firebaseConfig = {
    apiKey: "AIzaSyDu4jf2dNQdCxSGyHJFrNnq0A0BtOwl6IU",
    authDomain: "login-andres.firebaseapp.com",
    projectId: "login-andres",
    storageBucket: "login-andres.appspot.com",
    messagingSenderId: "55456233997",
    appId: "1:55456233997:web:e4ec5ce9938179298e3344"
  };
  
  // Initialize Firebase
 const app =  firebase.initializeApp(firebaseConfig);
  export const auth = app.auth();

  export const provider = new firebase.auth.GoogleAuthProvider();

  export const providerGoogle = new firebase.auth.GoogleAuthProvider();
  export const providerFacebook = new firebase.auth.FacebookAuthProvider();


  const Login = () => {
const [email, setEmail] = useState('');
const [password, setpssword] = useState('');


useEffect (() => {
    if (!firebase.apps.length) {
        initializeApp(firebaseConfig);
    }
}, []);

const handleLogin = async () => {
try {
    const response = await firebase.auth().signInWithEmailAndPassword(email, password);
    alert('Bienvenido');
    console.log('Inicio de sesion exitoso:', response.user);
} catch (error) {
    alert('usuario y/o contraseña invalidos');
    console.error('error durante el incio de sesion:', error.message);
}
};
    return(
        <div className="login-container">

            <fieldset>

            <legend>Login</legend>
            <label>email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <br></br>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setpssword(e.target.value)}></input>
            <br></br>
            <button onClick={handleLogin}>Login</button>


            <AuthButton></AuthButton>

        
        
            
           
            </fieldset>

        </div>
    );

  };

  export default Login;
  