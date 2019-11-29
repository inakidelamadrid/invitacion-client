import { combineReducers } from 'redux'
import inviteeReducer from './invitee'
import inviteesReducer from './invitees'

const RootReducer = combineReducers({
  invitee: inviteeReducer,
  invitees: inviteesReducer,
})

export default RootReducer
