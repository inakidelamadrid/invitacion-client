import request from 'superagent'

const APIHOST = 'http://localhost:8000'

const fullURI = path => `${APIHOST}${path}`

export const loadInvitees = () => request.get(fullURI('/invitees/'))
