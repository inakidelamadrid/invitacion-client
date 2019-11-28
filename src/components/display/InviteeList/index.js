import React from 'react'
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faCogs } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Invitee = ({ invitee }) => {
  const inviteState = {
    notsent: 'Invitacion no enviada',
    pending: 'Invitacion enviada',
    accepted: 'Si ire',
    rejected: 'No puedo ir',
    maybe: 'Tal vez ire',
  }

  const fbIcon =
    invitee.facebook_path.length > 0 ? (
      <>
        <FontAwesomeIcon icon={faFacebook} />
        &nbsp;
      </>
    ) : (
      ''
    )
  return (
    <tr>
      <td>{invitee.name}</td>
      <td>{invitee.last_name}</td>
      <td>
        {fbIcon}
        {invitee.facebook_path}
      </td>
      <td>{inviteState[invitee.invite_state]}</td>
      <td className={styles.cogsColumn}><FontAwesomeIcon icon={faCogs} /> | <FontAwesomeIcon icon={faClipboard} /></td>
    </tr>
  )
}

const InviteeList = ({ invitees }) => {

  return (
    <div className="inviteesListWrapper">
      <h1> Invitados </h1>
      <table className={styles.inviteeTable}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Facebook</th>
            <th>Estado de invitacion</th>
            <th>Link de invitacion</th>
          </tr>
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
