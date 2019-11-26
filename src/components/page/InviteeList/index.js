import React from 'react'
import { useSelector } from 'react-redux'
import InviteeList from '../../display/InviteeList'
import InviteeForm from '../../display/InviteeForm'
import { addInvitee } from '../../../actions/invitees'

const InviteeListPage = props => {
  const invitees = useSelector(state => state.invitees)
  return (
    <>
      <InviteeList invitees={invitees} />
      <InviteeForm addInvitee={addInvitee}/>
    </>
  )
}
export default InviteeListPage
