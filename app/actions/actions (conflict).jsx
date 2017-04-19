import firebase, {firebaseRef} from 'app/firebase';
import moment from 'moment';

export let setSearchText = (searchText) =>{
	return{
		type:'SET_SEARCH_TEXT',
		searchText
	}
};

export let toggleShowCompleted = ()=>{
	return{
		type:'TOGGLE_SHOW_COMPLETED'
	}
};

export let addTodo = (todo) =>{
	return{
		type:'ADD_TODO',
		todo
	}
};

export let addTodos = (todos) =>{
	return {
		type: 'ADD_TODOS',
		todos
	}
};

export let toggleTodo = (id) =>{
	return{
		type:'TOGGLE_TODO',
		id
	}
};

export var startAddTodo = (text)=>{
	return(dispatch, getState) =>{
		let todo = {
			text
			completed: false,
			createdAt:moment().unix(),
			completedAt: null
		}
	}
}