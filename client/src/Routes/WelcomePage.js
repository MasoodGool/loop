import React from 'react';
import { Link } from "react-router-dom";
import Login  from '../Components/Login';
import {Section} from '../Components/FormStyles'

function WelcomePage() {

  return (
    <>
    <Section>
      <Login/>
      <Link to="/dashboard">Dashboard</Link>
    </Section>  
    </>
  )
}

export default WelcomePage;