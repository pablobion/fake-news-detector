import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/login'
import Home from '../pages/home'

function routes() {
  return (
     
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/lostaccount' exact component={Login} />
        <Route path='/createaccount' exact component={Login} />

        <Route path='/home' exact component={Home} />

        <Route path='/' exact component={Login}>
          <Redirect to="/login" />
        </Route>
    </Switch>
  )
}

export default routes;

