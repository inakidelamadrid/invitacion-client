import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles.module.scss'
import { NOTSENT } from '../../../globals/constants/InviteStatus'

const InviteeForm = ({ addInvitee }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const invite = evt => {
    const invitee = { name, lastName, inviteState: NOTSENT }
    dispatch(addInvitee(invitee))
    resetValues()
  }

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
        <button onClick={invite}>Invitar</button>
      </div>
    </div>
  )

  function resetValues() {
    setName('')
    setLastName('')
  }
}

export default InviteeForm
