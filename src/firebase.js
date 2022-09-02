// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// const config = require("./firebaseprueba.json")
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7GYkg3itdQX4cP4sElEoCeFknklw26Kc",
    authDomain: "prueba-app-nut.firebaseapp.com",
    projectId: "prueba-app-nut",
    storageBucket  : "prueba-app-nut.appspot.com",
    messagingSenderId: "74329550877",
    appId  : "1:74329550877:web:fc199fcb5c07c3892196f4"
}
;

// Initialize Firebase
const firebaseCredenciales = initializeApp(firebaseConfig);

export default firebaseCredenciales;