import { combineReducers } from 'redux'
import AuthReducer from './auth'
import inviteeReducer from './invitee'
import inviteesReducer from './invitees'

const RootReducer = combineReducers({
  auth: AuthReducer,
  invitee: inviteeReducer,
  invitees: inviteesReducer,
})

export default RootReducer
