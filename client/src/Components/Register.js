import React from 'react';
import styled from "styled-components";
import RegisterForm from "./RegisterForm"

export default function Register() {
  return (
  <Wrapper>
      <RegisterForm/>
  </Wrapper>
  
  )
}

const Wrapper = styled.section`
  padding: 4em;
  background: #6a1959;
`;

