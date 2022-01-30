import React, { useEffect, useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import api from '../api'
import { Form, Heading, Field, Legend, List, ListItem, Label, Input, Button, Error, Success } from './FormStyles'
import { UserContext } from '../utils/UserContext';

export default function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [userTaken, setUserTaken] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [loginView, setLogin] = useState(true);
  const {user,setUser} = useContext(UserContext)

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile();
}

  const existingUser = (e) =>{
    e.preventDefault();
    setUsername("");
    setPassword("");
    setRegistered(false);
    setInvalid(false);
    setLogin(!loginView)
    setUserTaken(false);
  }


  const createProfile = async(e) => {
    e.preventDefault();
      // setLoading(true);
      try {
          const { data: response } = await api.register({
              "username": username,
              "password": password
          });
          setRegistered(true);
          setLogin(!loginView)
          setUsername("");
          setPassword("");
          setUserTaken(false);
      } catch (error) {
          setUserTaken(true);
          console.error(error.message);
      }
      // setLoading(false);
  }

  const login = async(e) => {
    e.preventDefault();
    setInvalid(false);
    setRegistered(false);
    setUserTaken(false);
    try {

        const { data: response } = await api.login({
          "username": username,
          "password": password
      });
        setUser(response);
        localStorage.setItem('user', response);
        navigate('/dashboard');
    } catch (error) {
        setInvalid(true);
        console.error(error.message);
    }
}



  return (
  <Form onSubmit={handleSubmit}>
    <Heading>{loginView ? "Welcome Back!" : "Sign Up"}</Heading>
    
    <Field>
      <Legend>{loginView ? "Log In": "Create an account"}</Legend>
      {registered
        ? <Success>Account Created, please login</Success>
        : ""
      }
      {invalid
        ? <Error>Invalid Username or Password</Error>
        : ""
      }
      {userTaken
        ? <Error>Username taken</Error>
        : ""
      }
      <List>
        <ListItem>
          <Label>Username:</Label>
          <Input type="text" value={username} onChange={e => setUsername(e.target.value)}></Input>
        </ListItem>
        <ListItem>
          <Label>Password:</Label>
          <Input type="text" value={password} onChange={e => setPassword(e.target.value)}></Input>
        </ListItem>
      </List>
    </Field>

      {loginView
        ? <Button onClick={login}>Login</Button>
        : <Button onClick={createProfile}>Register</Button>
      }
    <Button onClick={existingUser}>{loginView ? "Create an account": "Already have an account"}</Button>
    <Button onClick={()=> setUser(null)}>Logout</Button>
  </Form>
  
  )
}

