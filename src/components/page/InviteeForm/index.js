import React, { useState } from 'react'
import styles from './styles.module.scss'

const InviteeForm = () => {
  const [facebookPath, setFacebooPath] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const invite = evt => console.log('Invite!')
  const updateFacebookPath = evt => setFacebooPath(evt.target.value)
  const updateName = evt => setName(evt.target.value)
  const updateLastName = evt => setLastName(evt.target.value)

  return (
    <div>
      <div className={styles.formGroup}>
        <label htmlFor="">Nombre</label>
        <input
          onChange={updateName}
          className="border border-gray-300"
          type="text"
          name="name"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Apellido</label>
        <input
          onChange={updateLastName}
          className="border border-gray-300"
          type="text"
          name="lastname"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Facebook Profile</label>
        <input
          onChange={updateFacebookPath}
          className="border border-gray-300"
          type="text"
          name="facebookPath"
        />
      </div>
      <div className={styles.formGroup}>
        <button onClick={invite}>Invitar</button>
      </div>
    </div>
  )
}

export default InviteeForm
