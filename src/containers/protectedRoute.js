import React from 'react'
// import {useSelector} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import * as routes from './constants'

const ProtectedRoute = ({path, component}) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  
  if (isAuthenticated) return <Route path={path} component={component}></Route>

  return (
    <Route exact path={path} render={() => <Redirect to={`${routes.SIGN_IN}`}/>}></Route>
  )
}

export default ProtectedRoute
