//import uuid from 'uuid';
import moment from 'moment';

export let searchTextReducer = (state = '', action) => {
	//action.coisa = 2; para testar o deep-freeze. esta linha faz com qua a função deixe de ser pure function
	switch(action.type){
		case 'SET_SEARCH_TEXT':
			return action.searchText;

		default:
			return state;
	}
};

export let showCompletedReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;

		default:
			return state;
	}
};

export let todosReducer = (state =[], action) =>{
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				action.todo
			];

		case 'UPDATE_TODO':
			return state.map((todo)=>{
				
				if(todo.id === action.id){
					return{
						...todo,
						...action.updates
					}
				}
				else{
					return todo
				}
			});

		case 'GET_TODOS':
			return [
				...state,
				...action.todos
			];

		case 'LOGOUT':
			return [];

		default:
			return state;
	}
};

export let authReducer = (state={}, action)=>{
	switch (action.type){
		case 'LOGIN':
			return {
				uid: action.uid
			};

		case 'LOGOUT':
			return {};

		default:
			return state;
	}
};