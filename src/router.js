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
import Carousels from './page/ui/carousel';
import Logins from './page/form/login';
import Signups from './page/form/signup';
import City from './page/city';
import Order from './page/order';
import Common from './common';



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
								<Route path="/admin/ui/carousel" component={Carousels}></Route>
								<Route path="/admin/form/login" component={Logins}></Route>
								<Route path="/admin/form/reg" component={Signups}></Route>
								<Route path="/admin/city" component={City}></Route>
								<Route path="/admin/order" component={Order}></Route>
								<Route component={NoMatch}></Route>
							</Switch>
						</Admin>
					}></Route>
					<Route path="/common" render={() =>
						<Common>
							<Switch>
								<Route path="/common/order/detail/:orderId" component={Modals}></Route>


							</Switch>
						</Common>
					}></Route>
				</App>

			</HashRouter>
		)
	}
}