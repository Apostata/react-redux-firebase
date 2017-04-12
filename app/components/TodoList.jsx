import React from 'react';
import Todo from 'Todo';

export default class TodoList extends React.Component{
	render(){
		let {todos} = this.props;
		let renderTodos = ()=>{

			return todos.map((todo)=> <Todo key={todo.id} {...todo} />);
		}

		return(
			<div>
				{renderTodos()}
			</div>
		)
	}
}