import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/login'
import Detector from '../pages/detector'
import About from '../pages/about/'
import Groups from '../pages/groups/'
import Page404 from '../pages/404/'

function routes() {
	return (
		<Switch>
			<Route path="/" exact component={Login} /> {/* Desbugando hide refresh */}
			<Route path="/lostaccount" exact component={Login} /> {/* Desbugando hide refresh */}
			<Route path="/createaccount" exact component={Login} /> {/* Desbugando hide refresh */}
			<Route path="/detector" exact component={Detector} />
			<Route path="/about" exact component={About} />
			<Route path="/groups" exact component={Groups} />
			<Route path="*" component={Page404} />
			{/* <Route path='/' exact component={Login}>
          <Redirect to="/login" />
        </Route> USAR DEPOIS PARA VALIDAR SE A PESSOA TA LOGADA OU NAO */}
		</Switch>
	)
}

export default routes
