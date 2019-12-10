import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

//import logoImg from "../img/logo.jpg";
//import { Card, Logo, Form, Input, Button } from '../components/AuthForms';

function Login() {
  return (
    <div className={styles.card}>
      <form className={styles.form}>
        <input className={styles.input} type="email" placeholder="email" />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
        />
        <button className={styles.button}>Sign In</button>
      </form>
    </div>
  )
}

export default Login
