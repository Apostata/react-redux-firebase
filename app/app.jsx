import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';
import Login from 'Login';

import * as actions from 'actions';
import {configure} from 'configureStore';

const store = configure();


store.dispatch(actions.startGetTodos());

//load foundation

jQuery(document).foundation();
import 'style!css!sass!aplicationStyles';

ReactDOM.render(
  <Provider store={store}>
  	<Router history={hashHistory}>
	    <Route path="/">
	    	<IndexRoute component={Login}></IndexRoute>
	    	<Route path="todoApp" component={TodoApp}></Route>
	    </Route>
  	</Router>
  </Provider>,
  document.getElementById('app')
);
