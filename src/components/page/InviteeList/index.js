import React from 'react'
import { useSelector } from 'react-redux'
import InviteeList from '../../display/InviteeList'
import InviteeForm from '../../display/InviteeForm'
import { addInvitee } from '../../../actions/invitees'
import styles from './styles.module.scss'

const InviteeListPage = props => {
  const invitees = useSelector(state => state.invitees)
  return (
    <div className={styles.page}>
      <div>
        <InviteeForm addInvitee={addInvitee} />
      </div>
      <div className={styles.inviteeList}>
        <InviteeList invitees={invitees} />
      </div>
    </div>
  )
}
export default InviteeListPage
