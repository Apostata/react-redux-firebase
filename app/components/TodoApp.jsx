import React from 'react';
import TodoList from 'TodoList';

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

	render(){
		let {todos} = this.state;
		return(
			<div>
				<TodoList todos={todos}/>
			</div>
		)
	}
}