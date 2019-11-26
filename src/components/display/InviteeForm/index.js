import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.scss'

const InviteeForm = ({ addInvitee }) => {
  const dispatch = useDispatch()
  const [facebookPath, setFacebooPath] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const invite = evt => {
    const invitee = { name, lastName, facebookPath }
    dispatch(addInvitee(invitee))
    setFacebooPath("")
    setName("")
    setLastName("")
  }

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
          value={name}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Apellido</label>
        <input
          onChange={updateLastName}
          className="border border-gray-300"
          type="text"
          name="lastname"
          value={lastName}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Facebook Profile</label>
        <input
          onChange={updateFacebookPath}
          className="border border-gray-300"
          type="text"
          name="facebookPath"
          value={facebookPath}
        />
      </div>
      <div className={styles.formGroup}>
        <button onClick={invite}>Invitar</button>
      </div>
    </div>
  )
}

export default InviteeForm
