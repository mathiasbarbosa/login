import './App.css';
import Login from './vistas/login';
import firebaseCredenciales from './firebase'; //iniciando firebase
import { useState } from 'react';
import Home from './vistas/home';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseCredenciales)
function App() {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (usuarioFirebase) => {
    usuarioFirebase ? setUser(usuarioFirebase) : setUser(null)
    console.log("toy aca");
  })

  return (
    <div className="App">
      {user ? <Home/> : <Login/> }
        
    </div>
  );
}

export default App;
