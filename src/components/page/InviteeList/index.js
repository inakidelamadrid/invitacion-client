import React from 'react'
import { useSelector } from 'react-redux'

const Invitee = ({ name }) => {
  return <div className="">{name}</div>
}
const InviteeList = ({ data }) => {
  const invitees = useSelector(state => state.invitees)
  return (
    <div className="inviteesListWrapper">
      <h1> Invitados </h1>
      {invitees.map((invitee, index) => (
        <Invitee key={index} name={invitee.name} />
      ))}
    </div>
  )
}
export default InviteeList
