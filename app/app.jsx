import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';


//load foundation

jQuery(document).foundation();
import 'style!css!sass!aplicationStyles';

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
