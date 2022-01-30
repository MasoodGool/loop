import React from 'react';
import { Link } from "react-router-dom";
import Login  from '../Components/Login';
import {Section} from '../Components/FormStyles'

function WelcomePage() {

  return (
    <>
    <Section>
      <Login/>
    </Section>  
    </>
  )
}

export default WelcomePage;