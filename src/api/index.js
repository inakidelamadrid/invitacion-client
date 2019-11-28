import request from 'superagent'

const APIHOST = 'http://localhost:8000'

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