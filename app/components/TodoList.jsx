import React from 'react';
import Todo from 'Todo';

export default class TodoList extends React.Component{
	render(){
		let {todos} = this.props;

		let renderTodos = ()=>{
			if(todos.length === 0){
				return (
					<p className="container__message">Não há tarefas a serem realizdas :)</p>
				)
			}

			return todos.map((todo)=> <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>);
		}

		return(
			<div>
				{renderTodos()}
			</div>
		)
	}
}