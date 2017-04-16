import React from 'react';
import {connect} from 'react-redux';

import Todo from 'Todo';

export class TodoList extends React.Component{
	render(){
		let {todos} = this.props;

		let renderTodos = ()=>{
			if(todos.length === 0){
				return (
					<p className="container__message">Não há tarefas a serem realizdas :)</p>
				)
			}

			return todos.map((todo)=> <Todo key={todo.id} {...todo} />);
		}

		return(
			<div>
				{renderTodos()}
			</div>
		)
	}
}

export default connect(
	(state)=>{
		return{
			todos: state.todos
		}
	}
)(TodoList);//conecta ao store e retorna apenas todos do state, passando todos para a props do TodoList.