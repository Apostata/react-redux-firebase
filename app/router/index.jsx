import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

let requireLogin = (nextState, replace, next)=>{
	if(!firebase.auth().currentUser){
		replace('/');
	}
	next();
};

let redirectIfLogin = (nextState, replace, next)=>{
	if(firebase.auth().currentUser){
		replace('/todoapp');
	}
	next();
};

export default(
	<Router history={hashHistory}>
	    <Route path="/">
	    	<IndexRoute component={Login} onEnter={redirectIfLogin}></IndexRoute>
	    	<Route path="todoApp" component={TodoApp} onEnter={requireLogin}></Route>
	    </Route>
  	</Router>
);