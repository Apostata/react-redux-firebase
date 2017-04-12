import React from 'react';
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';

export default class TodoApp extends React.Component{

	constructor(){
		super();
		this.state ={
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

	componentWillUpdate(prevProps, prevState){
		
	}

	handleAddTodo = (text)=>{
		var addedTodo = this.state.todos;
		addedTodo.push({id:this.state.todos.length + 1, text:text});
		this.setState({
			todos: addedTodo
		})
	}

	render(){
		let {todos} = this.state;
		return(
			<div>
				<TodoList todos={todos}/>
				<TodoAdd addTodo={this.handleAddTodo}/>
			</div>
		)
	}
}