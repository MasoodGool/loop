import React from 'react';
import styled from "styled-components";
import {Button} from "./Button"

export default function Register() {
  return (
  <Wrapper>
          Username: 
      <Input/>
    <Button>
      Login
    </Button>
    Password: 
      <Input/>
  </Wrapper>
  
  )
}

const Wrapper = styled.section`
  padding: 4em;
  background: #0f9959;
`;

const Input = styled.input`
  background: white;
`;

