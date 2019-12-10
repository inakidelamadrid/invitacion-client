
const AuthReducer = (state = {logged: false}, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {...state, logged: true}
    default:
      return state
  }
}

export default AuthReducer
