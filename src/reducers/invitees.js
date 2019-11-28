const inviteesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INVITEE':
      const newState = [...state, action.payload.invitee]
      return newState
    case 'LOAD_INVITEES':
      return action.payload.invitees
    default:
      return state
  }
}

export default inviteesReducer
