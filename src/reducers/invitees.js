const inviteesReducer = (state = [], action) => {
  switch (action.type) {
    case 'APPEND_INVITEE':
      return [...state, action.payload.invitee]
    case 'LOAD_INVITEES':
      return action.payload.invitees
    default:
      return state
  }
}

export default inviteesReducer
