import React from 'react'
import styles from './styles.module.scss'


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
