import React, { useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import api from '../api'
import { Form, Heading, Field, Legend, List, ListItem, Label, Input, Button, Error, Success } from './FormStyles'
import { UserContext } from '../utils/UserContext';

export default function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalidUser] = useState(false);
  const [userTaken, setUsernameTaken] = useState(false);
  const [registered, setRegisteredUser] = useState(false);
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
    setRegisteredUser(false);
    setInvalidUser(false);
    setLogin(!loginView)
    setUsernameTaken(false);
  }

  const createProfile = async(e) => {
    e.preventDefault();
      try {
          const { data: response } = await api.register({
              "username": username,
              "password": password
          });
          setRegisteredUser(true);
          setLogin(!loginView)
          setUsername("");
          setPassword("");
          setUsernameTaken(false);
      } catch (error) {
          setUsernameTaken(true);
          console.error(error.message);
      }
  }

  const login = async(e) => {
    e.preventDefault();
    setInvalidUser(false);
    setRegisteredUser(false);
    setUsernameTaken(false);
    try {
        const { data: response } = await api.login({
          "username": username,
          "password": password
      });
        setUser(response);
        navigate('/dashboard');
    } catch (error) {
        setInvalidUser(true);
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
  </Form>
  )
}

