const addEviteToInvitee = invitee => {
  const { code, facebook_path, last_name, name, status } = invitee

  return { facebook_path, last_name, name, e_vite: { code, status } }
}

const inviteesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_E_VITE_TO_INVITE':
      return state.map(invitee => {
        if (invitee.id === action.payload.inviteeId)
          return { ...invitee, e_vite: action.payload.e_vite }
        return invitee
      })
    case 'APPEND_INVITEE':
      return [...state, action.payload.invitee]
    case 'LOAD_INVITEES':
      // the api returns the data for the invitee and the e_vite normalized,
      // so we need to nest the objects
      return action.payload.invitees.map(addEviteToInvitee)
    default:
      return state
  }
}

export default inviteesReducer
