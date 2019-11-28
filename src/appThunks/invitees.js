import {
  createInvitee as apiCreateInvitee,
  loadInvitees as apiLoadInvitees,
} from '../api'

export const loadInvitees = () => dispatch => {
  apiLoadInvitees().then(res => {
    const invitees = res.body
    dispatch({ type: 'LOAD_INVITEES', payload: { invitees } })
  })
}

export const createInvitee = invitee => dispatch => {
  apiCreateInvitee(invitee).then(res => {
    const invitee = res.body
    dispatch({ type: 'APPEND_INVITEE', payload: { invitee } })
  })
}
