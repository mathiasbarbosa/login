import React, { useState } from 'react'
import firebaseCredenciales from '../firebase'
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
const auth = getAuth(firebaseCredenciales)
console.log(process.env.REACT_APP_apikey);
function Login() {

    const [registrado, setRegistrado] = useState()
  
    const iniciarSesion = (event) => {
      event.preventDefault()
      let mail =  document.querySelector("#mail").value;
      let password = document.querySelector("#password").value

      signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, "salio bien");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
      console.log("iniciar sesion ok");
    }

    const handleIniciarSesion = () => {
      setRegistrado(true)
    }

    const handleRegistrate = () => {
      setRegistrado(false)
  }

    const submitFormRegistro = (event) => {
      event.preventDefault();
      let usuario = {
        nombre: document.querySelector("#nombre").value,
        apellido: document.querySelector("#apellido").value,
        mail: document.querySelector("#mail").value,
        password: document.querySelector("#password").value
      }
      console.log(usuario);
      createUserWithEmailAndPassword(auth, usuario.mail, usuario.password)
      .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user, userCredential);
      // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        // ..
      });

    }
  return (
    <div>
    {
       registrado === true ? <>
                            <h2>iniciar sesion</h2>
                            <form onSubmit={iniciarSesion}>
                                <input type="text" id='mail' />
                                <input type="text" id='password' />
                                <button>iniciar sesion</button>
                                <button onClick={handleRegistrate}>Registrate</button>
                            </form>
                            </>
                          :
                          <>
                          <h2>Registrate</h2>
                          <form onSubmit={submitFormRegistro} action="">
                            <input type="text" id='nombre' />
                            <input type="text" id='apellido' />
                            <input type="text" id='mail' />
                            <input type="text" id='password' />
                            <button id='btn-registrar'>Registrate</button>
                            <button onClick={handleIniciarSesion}> iniciar Sesion</button>
                          </form>
                          </>
    }
    
    </div>
  )
}

export default Login