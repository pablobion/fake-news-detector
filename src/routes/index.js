import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/login'

function routes() {
  return (
     
    <Switch>
        <Route path='/' exact component={Login} />
    </Switch>
  )
}

export default routes;