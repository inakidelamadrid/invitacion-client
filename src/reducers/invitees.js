const initial = [{ name: 'Teresa' }, { name: 'Mara' }, { name: 'Loren' }]


const inviteesReducer = (state = initial, action) => {
  switch (action.type) {
    case 'ADD_INVITEE':
      return [...state, action.payload.invitee]
    default:
      return state
  }
}

export default inviteesReducer
