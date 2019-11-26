const initial = [
  { name: 'Teresa', lastName: 'Cruz', facebookPath: 'tere.cruz', inviteState: 'notsent' },
  { name: 'Mara', lastName: 'De La Madrid', facebookPath: 'loren.cernas', inviteState: 'notsent' },
  { name: 'Loren', lastName: 'Cernas', facebookPath: 'fabiola.delamadrid', inviteState: 'notsent' },
]

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
