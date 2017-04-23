import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import * as actions from 'actions';
import {configure} from 'configureStore';
import firebase from 'app/firebase';
import router from 'app/router';

firebase.auth().onAuthStateChanged((user)=>{
	if(user){
		hashHistory.push('/todoapp');
	}
	else{
		hashHistory.push('/');
	}
})

const store = configure();


store.dispatch(actions.startGetTodos());

//load foundation

jQuery(document).foundation();
import 'style!css!sass!aplicationStyles';

ReactDOM.render(
  <Provider store={store}>
  	{router}
  </Provider>,
  document.getElementById('app')
);
