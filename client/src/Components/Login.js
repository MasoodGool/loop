import React, { useEffect, useState, useContext} from 'react';
import api from '../api'
import { Form, Heading, Field, Legend, List, ListItem, Label, Input, Button, Error } from './FormStyles'
import { UserContext } from '../utils/UserContext';

export default function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [loginView, setLogin] = useState(false);
  const {user,setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile();
}

  const existingUser = (e) =>{
    e.preventDefault();
    setUsername("");
    setPassword("");
    setInvalid(false);
    setLogin(!loginView)
  }


  const createProfile = async(e) => {
    e.preventDefault();
      // setLoading(true);
      try {
          const { data: response } = await api.register({
              "username": username,
              "password": password
          });
          // setBackendData(response);
      } catch (error) {
          console.error(error.message);
      }
      // setLoading(false);
  }

  const login = async(e) => {
    e.preventDefault();
    setInvalid(false);
    // setLoading(true);
    try {

        const { data: response } = await api.login({
          "username": username,
          "password": password
      });
        console.log("Checking log in response: ", response);
        setUser(response);
    } catch (error) {
        setInvalid(true);
        console.error(error.message);
    }
    // setLoading(false);
}



  return (
  <Form onSubmit={handleSubmit}>
    <Heading>{loginView ? "Welcome Back!" : "Sign Up"}</Heading>
    
    <pre>{JSON.stringify(user,null,2)}</pre>
    
    <Field>
      <Legend>{loginView ? "Log In": "Create an account"}</Legend>
      {invalid
        ? <Error>Invalid Username or Password</Error>
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

