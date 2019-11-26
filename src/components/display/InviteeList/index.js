import React from 'react'


const Invitee = ({ name }) => {
  return <div className="">{name}</div>
}

const InviteeList = ({invitees }) => {
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
