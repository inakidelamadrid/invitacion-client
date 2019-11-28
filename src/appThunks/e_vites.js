import { createEvite as apiCreateEvite } from '../api'

export const createEvite = inviteeId => dispatch => {
  apiCreateEvite(inviteeId).then(res => {
    const e_vite = res.body
    dispatch({ type: 'ADD_E_VITE_TO_INVITE', payload: { inviteeId, e_vite } })
  })
}
