import React from 'react';
import { Form, Heading, Field, Legend, List, ListItem, Label, Input, Button  } from './FormStyles'

export default function Login(props) {

  const existingUser = props.existingUser;

  return (
  <Form>
    <Heading>{existingUser ? "Welcome Back!" : "Sign Up"}</Heading>
    <Field>
      <Legend>Log In</Legend>
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
    <Button>Login</Button>
    <Button>Create an account</Button>
    
  </Form>
  
  )
}

