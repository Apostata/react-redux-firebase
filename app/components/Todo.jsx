import React from 'react';
import moment from 'moment';
moment.locale('pt-BR');

export default class Todo extends React.Component{

	handleToggle = ()=>{
		let id = this.props.id;
		this.props.onToggle(id);
	}

	render(){
		let {text, id, completed, createdAt, completedAt} = this.props;

		let todoClassName = completed ? 'todo todo-completed' : 'todo';

		let renderDate = ()=>{
			let message = completed ? "Finalizada em:" : "Criado em :";
			let timestamp = completed ? completedAt :createdAt;

			return `${message} ${moment.unix(timestamp).format('D/MM/YYYY - hh:mm:ss')}`
		};

		return(
			<div className={todoClassName} onClick={this.handleToggle}>
				<div>
					<input type="checkbox" checked={completed} readOnly/>
				</div>
				<div>
					<p>{text}</p>
					<p className="todo__subt">{renderDate()}</p>
				</div>
			</div>
		)
	}
}