import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import Layout from './components/layout.jsx';
import Home from './scenes/home/home.jsx';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


//Reducer
import teamsReducer from './store/reducers/teams-reducer';

//Store
const store  = createStore(teamsReducer);

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
		    <Route path='/' component={Layout}>
		    	<IndexRoute component={Home}/>
		    </Route>
	  	</Router>
  	</Provider>,
	document.querySelector('[app-root]')
);