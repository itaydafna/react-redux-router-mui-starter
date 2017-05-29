import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, IndexRedirect, hashHistory, Redirect } from 'react-router';
import App from "./components/app";
import reducers from "./reducers";
import { loggerMiddleware } from './middleware/logger-middleware';
import './index.css'
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

import injectTapEventPlugin from 'react-tap-event-plugin';
try { injectTapEventPlugin(); } catch (e) { // Do nothing, just preventing error 
}



const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(reducers);

const Home = ()=><div><ActionHome color='red'/></div>
const Away = ()=><div><ActionFlightTakeoff color='blue'/></div>

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<Route path="home" component={Home}/>
					<Route path="away" component={Away} />
				</Route>
			</Router>
		</MuiThemeProvider>
	</Provider>,
	document.querySelector("#root")
);
