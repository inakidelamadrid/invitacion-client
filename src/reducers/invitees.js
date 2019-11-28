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
      return action.payload.invitees
    default:
      return state
  }
}

export default inviteesReducer
