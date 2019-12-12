
const AuthReducer = (state = {logged: true}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state, logged: true}
    default:
      return state
  }
}

export default AuthReducer
