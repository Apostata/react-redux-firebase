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

export let updateTodo = (id, updates) =>{
	return{
		type:'UPDATE_TODO',
		id,
		updates
	}
};

export let startAddTodo = (text)=>{//asyn put in database then pass action to redux
	return(dispatch, getState) =>{
		let todo = {
			text,
			completed: false,
			createdAt:moment().unix(),
			completedAt: null
		};
		let todoRef = firebaseRef.child('todos').push(todo);

		return todoRef.then(()=>{
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		}).catch((e)=>{
			console.log(e);
		});
	}
}

export let startUpdateTodo = (id, completed) =>{
	return(dispatch, getState) =>{
		let todoRef = firebaseRef.child(`todos/${id}`);
		let updates = {
			completed,
			completedAt: completed ? moment().unix(): null
		};

		return todoRef.update(updates).then(()=>{
			dispatch(updateTodo(id, updates));
		}).catch((e)=>{
			console.log(e);
		});
	}
}