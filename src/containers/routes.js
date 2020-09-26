import {Switch, Route} from 'react-router-dom'
import React from 'react'

import HomePage from './Home/index'
import SignIn from './SignIn/index'
import SignUp from './SignUp/index'
import AccountPage from './Account/index'
import PageNotFound from './PageNotFound/index'

import ProtectedRoute from './protectedRoute'
import * as route from './constants'

const Routes = (props) => {
  return (
    <Switch>
      <Route component={HomePage} path={`${route.HOME}`}/>
      <Route component={SignUp} path={`${route.SIGN_UP}`}/>
      <Route component={SignIn} path={`${route.SIGN_IN}`}/>
      <ProtectedRoute component={AccountPage} path={`${route.ACCOUNT}`}/>
      <Route component={PageNotFound} path={`${route.PAGE_NOT_FOUND}`} />
    </Switch>
  )
}

export default Routes;