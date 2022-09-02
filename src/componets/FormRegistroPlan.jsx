import React from 'react'

import firebaseCredenciales from '../firebase';
import {getFirestore, doc, setDoc, getDoc} from "firebase/firestore"
import { useEffect } from 'react';
import { useState } from 'react';
import { async } from '@firebase/util';

const db = getFirestore(firebaseCredenciales)

// me tenngo que traer el id de registro uid
export default function FormRegistroPlan({user}) {
   

    console.log(db);

    const [planRegistrado, setPlanRegistrado] = useState()

    console.log(user, "user en el registro form");
    const enviardatos = (event) => {
        event.preventDefault()
        let usuario = {
            id: user.uid,
            nombre: document.querySelector("#nombre").value,
            apellido: document.querySelector("#apellido").value,
            edad: document.querySelector("#edad").value,
            telefono: document.querySelector("#telefono").value,
            plan: document.querySelector("#plan").value,
        }
        console.log(usuario);
        setDoc(doc(db, 'usuarios', usuario.id), {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            edad: usuario.edad,
            telefono: usuario.telefono,
            plan: usuario.plan,
            id: usuario.id
        }).then(() => {
           console.log( "Data saved successfully!");
          })
          .catch((error) => {
            // The write failed...
            console.log(error);
          });
          
    }


    // use efect para ver si existe el usuario
    useEffect(() => {
        async function fetchData(){
            
            const docRef = doc(db, "usuarios", user.uid);
            const docSnap = await  getDoc(docRef);
    
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setPlanRegistrado(docSnap.data())
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }

        fetchData()
    },[])

  return (
        planRegistrado ? 
        <>
        <h1>Bienvenido {planRegistrado.nombre}</h1>
        <span>Tus datos:</span>
        <ul>
            <li>Nombre: {planRegistrado.nombre}</li>
            <li>Apellido: {planRegistrado.apellido}</li>
            <li>Edad: {planRegistrado.edad}</li>
            <li>Telefono: {planRegistrado.telefono}</li>
            <li>Plan: {planRegistrado.plan}</li>
        </ul>
        </>
        :
        <>
            <h1>Completa tu perfil!</h1>
            <form onSubmit={enviardatos} action="">
                <input type="text" id='nombre'  placeholder='nombre' />
                <input type="text" id='apellido' placeholder='apellido' />
                <input type="number" id='edad' placeholder='edad' />
                <input type="number" id='telefono'placeholder='numero de telefono' />
                <select name="" id="plan">
                    <option value="basico">basico</option>
                    <option value="medio">medio</option>
                    <option value="avanzado">avanzado</option>
                </select>
                <button>Enviar</button>
            </form>
        </>
  )
}
