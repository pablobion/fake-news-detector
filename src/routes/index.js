import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/login'

function routes() {
  return (
     
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/lostaccount' exact component={Login} />
        <Route path='/createaccount' exact component={Login} />
    </Switch>
  )
}

export default routes;