import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import about from './about'
import Main from './Main'

export default class Home extends React.Component {

	render() {
		return (
			<HashRouter>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
					<hr></hr>
					<Route exact={true} path="/" component={Main}></Route>
					<Route path="/about" component={about}></Route>

				</div>

			</HashRouter>
		)
	}
}