//import jQuery from 'jQuery';

export default class TodoApi {
	static setTodos(todos){
		if(Array.isArray(todos)){
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	}

	static getTodos(){
		let stringTodos = localStorage.getItem('todos');
		let todos = [];

		try{
			todos = JSON.parse(stringTodos);
		}
		catch(e){

		}

		return Array.isArray(todos)? todos : [];
	}

	static filterTodos(todos, showCompleted, searchText){
		var filteredTodos = todos;
		//filter by show completed
		filteredTodos = filteredTodos.filter((todo)=>{
			return !todo.completed || showCompleted; //returna todos que não estão completos ou todos se showCompleted is true
		});

		//filter by search text
		filteredTodos = filteredTodos.filter((todo)=>{
		  return searchText.length === 0 || todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
		});

		
		//sort todos with no-complete first
		filteredTodos.sort((a, b)=>{
			if(!a.completed && b.completed){
				return -1;
			}
			else if(a.completed && !b.completed){
				return 1;
			}
			else{
				return 0;
			}
			//se -1 a antes de b , se 1 b antes de a, se 0 não modifica
		});

		return filteredTodos;
	}
};