import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.scss'

const InviteeForm = ({ addInvitee }) => {
  const dispatch = useDispatch()
  const [facebookPath, setFacebookPath] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const invite = evt => {
    const invitee = { name, lastName, facebookPath, inviteState: 'notsent' }
    dispatch(addInvitee(invitee))
    resetValues()
  }

  const updateFacebookPath = evt => setFacebookPath(evt.target.value)
  const updateName = evt => setName(evt.target.value)
  const updateLastName = evt => setLastName(evt.target.value)

  return (
    <div>
      <div className={styles.formGroup}>
        <label htmlFor="">Nombre</label>
        <input onChange={updateName} type="text" name="name" value={name} />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Apellido</label>
        <input
          onChange={updateLastName}
          type="text"
          name="lastname"
          value={lastName}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="">Facebook</label>
        <input
          onChange={updateFacebookPath}
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

  function resetValues() {
    setFacebookPath('')
    setName('')
    setLastName('')
  }
}

export default InviteeForm
