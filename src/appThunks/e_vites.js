import {
  createEvite as apiCreateEvite,
  changeEviteStatus as apiChangeEviteStatus,
} from '../api'

export const createEvite = inviteeId => dispatch => {
  apiCreateEvite(inviteeId).then(res => {
    const e_vite = res.body
    dispatch({ type: 'ADD_E_VITE_TO_INVITE', payload: { inviteeId, e_vite } })
  })
}

export const changeStatus = (code, status) => dispatch => {
  apiChangeEviteStatus(code, status).then(res => {
    const e_vite = res.body
    dispatch({ type: 'UPDATE_INVITEE_EVITE', payload: { e_vite } })
  })
}
