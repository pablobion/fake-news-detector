import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../pages/login'
import Detector from '../pages/detector'
import About from '../pages/about/'
import Groups from '../pages/groups/'

function routes() {
	return (
		<Switch>
			<Route path="/" exact component={Login} /> {/* Desbugando hide refresh */}
			<Route path="/lostaccount" exact component={Login} /> {/* Desbugando hide refresh */}
			<Route path="/createaccount" exact component={Login} /> {/* Desbugando hide refresh */}
			<Route path="/detector" exact component={Detector} />
			<Route path="/about" exact component={About} />
			<Route path="/groups" exact component={Groups} />
			<Route path="/" exact component={Login}>
				{' '}
				{/* Usar depois para autenticação */}
				<Redirect to="/login" />
			</Route>
		</Switch>
	)
}

export default routes
