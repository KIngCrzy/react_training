import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './page/login';
import Admin from './admin';
import Buttons from './page/ui/buttons';
import NoMatch from './page/nomatch';

export default class IRouter extends React.Component {

	render() {
		return (
			<HashRouter>
				<App>
					<Route path="/login" component={Login}></Route>
					<Route path="/admin" render={() =>
						<Admin>
							<Route path="/admin/ui/buttons" component={Buttons}></Route>
							<Route component={NoMatch}></Route>
						</Admin>
					}></Route>
				</App>

			</HashRouter>
		)
	}
}