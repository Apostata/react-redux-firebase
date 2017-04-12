import React from 'react';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';

export default class TodoApp extends React.Component{

	constructor(){
		super();
		this.state ={
			showCompleted: false,
			searchedText: '',
			todos: [
				{
					id:1,
					text: 'Passear com o cachorro!'
				},
				{
					id: 2,
					text: 'Limpar o jardim!'
				},
				{
					id:3,
					text: 'Estudar React'
				},
				{
					id:4,
					text: 'Fumar um cigarrinho'
				}
			]
		}
	}


	handleAddTodo = (text)=>{
		var addedTodo = this.state.todos;
		addedTodo.push({id:this.state.todos.length + 1, text:text});
		this.setState({
			todos: addedTodo
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
				<TodoList todos={todos}/>
				<TodoAdd addTodo={this.handleAddTodo}/>
			</div>
		)
	}
}