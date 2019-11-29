import { loadInvitee as apiLoadInvitee } from '../api'

export const loadInvitee = eviteCode => dispatch => {
  apiLoadInvitee(eviteCode).then(res => {
    const invitee = res.body
    dispatch({ type: 'LOAD_INVITEE', payload: { invitee } })
  })
}
