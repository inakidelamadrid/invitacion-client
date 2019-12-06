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
  const body = {
    name: invitee.name,
    last_name: invitee.lastName,
  }
  apiCreateInvitee(body).then(res => {
    const invitee = res.body
    dispatch({ type: 'APPEND_INVITEE', payload: { invitee } })
  })
}
