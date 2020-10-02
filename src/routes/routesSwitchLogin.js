import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/login/switchPages/login'
import CreateAccount from '../pages/login/switchPages/createAccount'
import LostAccount from '../pages/login/switchPages/lostAccount'


function routes() {
  return (
     
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/lostaccount' exact component={LostAccount} />
        <Route path='/createaccount' exact component={CreateAccount} />
    </Switch>
  )
}

export default routes;