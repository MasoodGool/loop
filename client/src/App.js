import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Login  from './Components/Login';

function App() {

  return (
    <>
    <Section>
      <Login/>
    </Section>  
    <Link to="/dashboard">Dashboard</Link> |{" "}
    </>
  )
}

export default App;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr minmax(200px,400px) 1fr;
  grid-template-rows: 1fr minmax(auto,1fr) 1fr;
  grid-gap: 10px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  box-sizing: border-box;

  @keyframes Gradient {
  0% {
    background-position: 0% 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0% 50%
  }
}
`