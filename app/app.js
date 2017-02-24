import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'redux';

import Layout from './components/layout.jsx';
import Home from './scenes/home/home.jsx';

import Store from './store/store.js';



ReactDOM.render(
	<Provider store={Store}>
		<Router history={browserHistory}>
		    <Route path='/' component={Layout}>
		    	<IndexRoute component={Home} />
		    </Route>
	  	</Router>
  	</Provider>,
	document.querySelector('[app-root]')
);