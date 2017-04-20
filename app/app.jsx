import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';

import * as actions from 'actions';
import {configure} from 'configureStore';
import TodoApi from 'TodoApi';

const store = configure();


store.dispatch(actions.startGetTodos());

//load foundation

jQuery(document).foundation();
import 'style!css!sass!aplicationStyles';

ReactDOM.render(
  <Provider store={store}>
  	<TodoApp/>
  </Provider>,
  document.getElementById('app')
);
