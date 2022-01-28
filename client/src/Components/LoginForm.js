import React from 'react';
import styled from "styled-components";
import {Button} from "./Button"

export default function Login() {
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
  background: #99640f;
`;


const Input = styled.input`
  background: white;
`;

