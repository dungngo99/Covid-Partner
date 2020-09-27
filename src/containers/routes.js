import {Switch, Route} from 'react-router-dom'
import React from 'react'

import SignIn from './SignIn/index'
import SignUp from './SignUp/index'
import AccountPage from './Account/index'
import PageNotFound from './PageNotFound/index'
import Discussion from './Discussion/index'
import Dashboard from './Dashboard/index'
import Tips from './Tips/index'
import Donation from './Donation/index'

import ProtectedRoute from './protectedRoute'
import * as route from './constants'

const Routes = (props) => {
  return (
    <Switch>
      <Route component={Dashboard} path={route.DASHBOARD} />
      <Route component={SignUp} path={`${route.SIGN_UP}`}/>
      <Route component={SignIn} path={`${route.SIGN_IN}`}/>
      <Route component={Discussion} path={`${route.DISCUSSION}`}/>
      <Route component={Donation} path={route.DONATION}/>
      <Route component={Tips} path={route.TIPS}/>
      <Route component={AccountPage} path={`${route.ACCOUNT}`}/>
      <Route component={PageNotFound} path={`${route.PAGE_NOT_FOUND}`} />
    </Switch>
  )
}

export default Routes;