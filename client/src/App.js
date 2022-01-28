import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Login  from './Components/LoginForm';
import Register from './Components/RegisterForm';
import {Button} from './Components/Button';

function App() {

  const [login, setLogin] = useState(true);


  const existingUser = () =>{
    setLogin(!login)
  }



  return (
    <div>

    {login && <> Login <Login/></>}
    {!login && (
      <>
        Register
    <Register/>
      </>
    )}

    
    <Button onClick={existingUser}>
      Don't have an account yet?
    </Button>
    <Button>
      Logout
    </Button>
    <Link to="/dashboard">Dashboard</Link> |{" "}
    </div>
  )
}

export default App;
