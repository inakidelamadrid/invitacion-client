import React from 'react'
import styles from './styles.module.scss'

const Invitee = ({ invitee }) => {
  const inviteState = {
    notsent: 'not sent yet',
    pending: 'pending',
  }

  return (
    <tr>
      <td>{invitee.name}</td>
      <td>{invitee.lastName}</td>
      <td>{invitee.facebookPath}</td>
      <td>Invite {inviteState.pending}| copy invite</td>
      <td>Generate invite link </td>
    </tr>
  )
}

const InviteeList = ({ invitees }) => {
  return (
    <div className="inviteesListWrapper">
      <h1> Invitados </h1>
      <table className={styles.inviteeTable}>
        <thead>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Facebook</th>
          <th>Estado de invitacion</th>
          <th>Link de invitacion</th>
        </thead>
        <tbody>
          {invitees.map((invitee, index) => (
            <Invitee key={index} invitee={invitee} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default InviteeList
