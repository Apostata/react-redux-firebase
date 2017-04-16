import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';

import * as actions from 'actions';
import * as configureStore from 'configureStore';

const store = configureStore.configure();

store.subscribe(()=>{
	console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Limpar o jardim'));
store.dispatch(actions.setSearchText('Procurar por...'));
store.dispatch(actions.toggleShowCompleted());
//load foundation

jQuery(document).foundation();
import 'style!css!sass!aplicationStyles';

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
