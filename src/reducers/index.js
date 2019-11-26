import { combineReducers } from 'redux'
import inviteesReducer from './invitees'

const RootReducer = combineReducers({
  invitees: inviteesReducer,
})

export default RootReducer
