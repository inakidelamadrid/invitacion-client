import React from 'react'
import { Route, Redirect } from 'react-router'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { logged } = useSelector(state => state.auth)
  return (
    <Route
      {...rest}
      render={props => (logged ? <Component {...props} /> : <Redirect to="" />)}
    />
  )
}

export default PrivateRoute
