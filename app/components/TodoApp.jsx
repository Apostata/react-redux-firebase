import React from 'react';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';

import uuid from 'uuid';
import TodoApi from 'TodoApi';
import moment from 'moment';
 
export default class TodoApp extends React.Component{

	constructor(){
		super();
		this.state ={
			showCompleted: false,
			searchedText: '',
			todos: TodoApi.getTodos()
		}
	}

	componentDidUpdate(){ //quando o state der update ...
		TodoApi.setTodos(this.state.todos);
	}

	handleAddTodo = (text)=>{
		/*var addedTodo = this.state.todos;
		addedTodo.push({id:this.state.todos.length + 1, text:text});*/
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text:text,
					completed: false,
					createdAt:moment().unix(),
					completedAt: undefined
				}
			]
		});
	}

	handleSearchTodo = (isCompleted, searchedTodo)=>{
		//console.log(searchedTodo);
		this.setState({
			showCompleted: isCompleted,
			searchedText: searchedTodo.toLowerCase()
		});
	}

	render(){
		let {todos, showCompleted, searchedText} = this.state;
		let filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchedText);
		return(
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch searchTodo={this.handleSearchTodo}/>
							<TodoList/>
							<TodoAdd addTodo={this.handleAddTodo}/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}