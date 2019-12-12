import request from 'superagent'

const APIHOST = process.env.REACT_APP_API_HOST

const fullURI = path => `${APIHOST}${path}`

export const loadInvitees = () => request.get(fullURI('/invitees/'))

export const createInvitee = invitee => {
  const { name, last_name, facebook_path } = invitee
  return request.post(fullURI('/invitees/')).send({
    facebook_path,
    last_name,
    name,
  })
}

export const createEvite = inviteeId => {
  return request.post(fullURI('/e_vites/')).send({
    invitee_id: inviteeId,
  })
}

export const loadInvitee = eviteCode =>
  request.get(fullURI(`/invitees/usecode/${eviteCode}`))

export const changeEviteStatus = (code, status) =>
  request.put(fullURI(`/e_vites/change_status`)).send({ code, status })
