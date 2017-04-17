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


	render(){
		let {todos, showCompleted, searchedText} = this.state;
		let filteredTodos = TodoApi.filterTodos(todos, showCompleted, searchedText);
		return(
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch/>
							<TodoList/>
							<TodoAdd />
						</div>
					</div>
				</div>
			</div>
		)
	}
}