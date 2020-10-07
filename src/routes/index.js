import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/login'
import Detector from '../pages/detector'

function routes() {
  return (
     
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/lostaccount' exact component={Login} />
        <Route path='/createaccount' exact component={Login} />

        <Route path='/detector' exact component={Detector} />

        <Route path='/' exact component={Login}>
          <Redirect to="/login" />
        </Route>
    </Switch>
  )
}

export default routes;

