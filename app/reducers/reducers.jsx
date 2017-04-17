import uuid from 'uuid';
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
				{
					id: uuid(),
					text: action.text,
					completed: false,
					createdAt:moment().unix(),
					completedAt: undefined
				}
			];

		case 'TOGGLE_TODO':
			return state.map((todo)=>{
				
				if(todo.id === action.id){
					let nextCompleted = !todo.completed;	
				
					return {
						...todo,
						completed: nextCompleted,
						completedAt: nextCompleted ? moment().unix() : undefined
					};
				}
				else{
					return todo
				}
			});

		case 'ADD_TODOS':
			return [
				...state,
				...action.todos
			];

		default:
			return state;
	}
}