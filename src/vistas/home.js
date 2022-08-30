import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import firebaseCredenciales from '../firebase'

const auth = getAuth(firebaseCredenciales)
function Home() {

    const cerrarSesion = () => {
        signOut(auth).then(() => {
           console.log( "Sign-out successful.");
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <>
    <div>app de nutricion paa</div>
    <button onClick={cerrarSesion}>Cerrar sesion</button>
    
    </>
  )
}

export default Home