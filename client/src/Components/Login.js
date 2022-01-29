import React, { useEffect, useState } from 'react';
import { Form, Heading, Field, Legend, List, ListItem, Label, Input, Button  } from './FormStyles'

export default function Login(props) {

  
  const [loginView, setLogin] = useState(false);
  const existingUser = (e) =>{
    e.preventDefault();
    setLogin(!loginView)
  }

  return (
  <Form>
    <Heading>{loginView ? "Welcome Back!" : "Sign Up"}</Heading>
    <Field>
      <Legend>{loginView ? "Log In": "Create an account"}</Legend>
      <List>
        <ListItem>
          <Label>Username:</Label>
          <Input></Input>
        </ListItem>
        <ListItem>
          <Label>Password:</Label>
          <Input></Input>
        </ListItem>
      </List>
    </Field>
    <Button>{loginView ? "Login": "Register"}</Button>
    <Button onClick={existingUser}>{loginView ? "Create an account": "Already have an account"}</Button>
    
  </Form>
  
  )
}

