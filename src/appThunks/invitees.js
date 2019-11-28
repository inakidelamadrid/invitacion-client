import { loadInvitees as apiLoadInvitees } from '../api'

export const loadInvitees = () => dispatch => {
  apiLoadInvitees().then(res => {
    const invitees = res.body
    dispatch({ type: 'LOAD_INVITEES', payload: { invitees } })
  })
}
