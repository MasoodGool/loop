import React from 'react';
import styled from "styled-components";
import LoginForm from "./LoginForm"

export default function Login() {
  return (
  <Wrapper>
      <LoginForm/>
  </Wrapper>
  
  )
}

const Wrapper = styled.section`
  padding: 4em;
  background: #55640f;
`;

