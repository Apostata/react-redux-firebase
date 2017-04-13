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
					text: 'Passear com o cachorro!'
				},
				{
					id: uuid(),
					text: 'Limpar o jardim!'
				},
				{
					id:uuid(),
					text: 'Estudar React'
				},
				{
					id:uuid(),
					text: 'Fumar um cigarrinho'
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
					text:text
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