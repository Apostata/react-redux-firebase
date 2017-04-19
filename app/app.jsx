import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';

import * as actions from 'actions';
import {configure} from 'configureStore';
import TodoApi from 'TodoApi';

const store = configure();

store.subscribe(()=>{
	let state = store.getState();
	//console.log('New state', state);
	TodoApi.setTodos(state.todos);
});

let initialTodos = TodoApi.getTodos();//pega do localStorage
store.dispatch(actions.addTodos(initialTodos)); //passa para o redux

//load foundation

jQuery(document).foundation();
import 'style!css!sass!aplicationStyles';

ReactDOM.render(
  <Provider store={store}>
  	<TodoApp/>
  </Provider>,
  document.getElementById('app')
);
