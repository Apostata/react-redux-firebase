import React from 'react';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
import uuid from 'uuid';
export default class TodoApp extends React.Component{

	constructor(){
		super();
		this.state ={
			showCompleted: false,
			searchedText: '',
			todos: [
				{
					id:uuid(),
					text: 'Passear com o cachorro!',
					completed: false
				},
				{
					id: uuid(),
					text: 'Limpar o jardim!',
					completed: true
				},
				{
					id:uuid(),
					text: 'Estudar React',
					completed: false
				},
				{
					id:uuid(),
					text: 'Fumar um cigarrinho',
					completed: true
				}
			]
		}
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
					completed: false
				}
			]
		});
	}

	handleTodoToggle = (id)=>{
		let updatedTodos = this.state.todos.map((todo)=>{
			if(todo.id === id){
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({
			todos:updatedTodos
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
		let {todos} = this.state;
		return(
			<div>
				<TodoSearch searchTodo={this.handleSearchTodo}/>
				<TodoList todos={todos} onToggle={this.handleTodoToggle}/>
				<TodoAdd addTodo={this.handleAddTodo}/>
			</div>
		)
	}
}