import React from 'react'

const Invitee = ({ name }) => {
  return <div className="text-base font-sans">{name}</div>
}
const InviteeList = ({ data }) => {
  return (
    <div className="inviteesListWrapper font-sans text-3xl">
      <h1> Invitados </h1>
      {data.map((invitee, index) => (
        <Invitee key={index} name={invitee.name} />
      ))}
    </div>
  )
}
export default InviteeList
