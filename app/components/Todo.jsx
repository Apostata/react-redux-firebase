import React from 'react';
import {connect} from 'react-redux';

import moment from 'moment';
import * as actions from 'actions';

moment.locale('pt-BR');

export class Todo extends React.Component{

	render(){
		let {text, id, completed, createdAt, completedAt, dispatch} = this.props;

		let todoClassName = completed ? 'todo todo-completed' : 'todo';

		let renderDate = ()=>{
			let message = completed ? "Finalizada em:" : "Criado em :";
			let timestamp = completed ? completedAt :createdAt;

			return `${message} ${moment.unix(timestamp).format('D/MM/YYYY - hh:mm:ss')}`
		};

		return(
			<div className={todoClassName} onClick={()=>{ dispatch(actions.toggleTodo(id))}}>
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

export default connect()(Todo) //expor default é o que o import irá reconhecer caso seja chamado : import Todo from 'Todos'