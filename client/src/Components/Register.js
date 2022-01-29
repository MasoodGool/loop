import React from 'react';
import { Form, Heading, Field, Legend, List, ListItem, Label, Input, Button  } from './FormStyles'

export default function Register() {
  return (
  <Form>
    <Heading>Sign Up!</Heading>
    <Field>
      <Legend>Create Account</Legend>
      <List>
        <ListItem>
          <Label>Username:</Label>
          <Input></Input>
        </ListItem>
        <ListItem>
          <Label>Password:</Label>
          <Input></Input>
        </ListItem>
        <ListItem>
          <Label>
            Username
          </Label>
        </ListItem>
      </List>
    </Field>
    <Button>Login</Button>
    <Button>Create an account</Button>
    
  </Form>
  
  )
}

