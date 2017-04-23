import firebase, {firebaseRef, githubProvider} from 'app/firebase';
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

export let getTodos = (todos) =>{
	return {
		type: 'GET_TODOS',
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
};

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
};

export let startGetTodos = ()=>{
	return(dispatch, getState) => {
		let todosRef = firebaseRef.child('todos');

		return todosRef.once('value').then((snapshot)=>{
			let firebaseTodos = snapshot.val() || {};
			
			let todos = [];

			Object.keys(firebaseTodos).map((id, idx)=>{
				
				todos.push({
					...firebaseTodos[id],
					id
				});
			});
			dispatch(getTodos(todos));
		});
	}
};

export let startLogin =()=>{
	return(dispatch, getState) =>{
		return firebase.auth().signInWithPopup(githubProvider).then((result)=>{
			console.log('auth worked',result);
		}, (e)=>{
			console.log('login error', e);
		})
	}
}

export let startLogout =()=>{
	return(dispatch, getState) =>{
		return firebase.auth().signOut().then(()=>{
			console.log('Logged out!');
		}).catch((e)=>{
			console.log('Failed to logout');
		})
	}
}