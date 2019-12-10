import React from "react";
import { Link } from 'react-router-dom';
//import logoImg from "../img/logo.jpg";
//import { Card, Logo, Form, Input, Button } from '../components/AuthForms';

function Login() {
  return (
    <div className='card'>
      <form>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Sign In</button>
      </form>
      <Link to="/signup">Don't have an account?</Link>
    </div>
  );
}

export default Login;
