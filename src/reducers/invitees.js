const initial = [{ name: 'Teresa' }, { name: 'Mara' }, { name: 'Loren' }]

const inviteesReducer = (state = initial, action) => {
  switch (action.type) {
    case 'ADD_INVITEE':
      const newState = [...state, action.payload.invitee]
      return newState
    default:
      return state
  }
}

export default inviteesReducer
