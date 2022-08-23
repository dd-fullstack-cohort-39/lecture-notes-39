import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import { Home } from './Home'
import { Pizza } from './Pizza'
import { Navigation } from './Navigation'

export function App() {
	return(
		<>
			<BrowserRouter>
				<Navigation/>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/pizza' component={Pizza} />
				</Switch>
			</BrowserRouter>
		</>
	)

}