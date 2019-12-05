import { addEviteToInvitee } from './invitees'

const inviteeReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOAD_INVITEE':
      // the api returns the data for the invitee and the e_vite normalized,
      // so we need to nest the objects
      return addEviteToInvitee(action.payload.invitee)
    case 'UPDATE_INVITEE_EVITE':
      return {...state, e_vite: action.payload.e_vite}
    default:
      return state
  }
}

export default inviteeReducer
