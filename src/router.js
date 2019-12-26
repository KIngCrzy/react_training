import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Login from './page/login';
import Admin from './admin';
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import NoMatch from './page/nomatch';
import Loadings from './page/ui/loadings';
import Notifications from './page/ui/notification';
import Messages from './page/ui/messages';
import Tabs from './page/ui/tabs';
import Gallerys from './page/ui/gallery';


export default class IRouter extends React.Component {

	render() {
		return (
			<HashRouter>
				<App>
					<Route path="/login" component={Login}></Route>
					<Route path="/admin" render={() =>
						<Admin>
							<Switch>
								<Route path="/admin/ui/modals" component={Modals}></Route>
								<Route path="/admin/ui/buttons" component={Buttons}></Route>
								<Route path="/admin/ui/loadings" component={Loadings}></Route>
								<Route path="/admin/ui/notification" component={Notifications}></Route>
								<Route path="/admin/ui/messages" component={Messages}></Route>
								<Route path="/admin/ui/tabs" component={Tabs}></Route>
								<Route path="/admin/ui/gallery" component={Gallerys}></Route>

								<Route component={NoMatch}></Route>
							</Switch>
						</Admin>
					}></Route>
				</App>

			</HashRouter>
		)
	}
}