import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class TodoAdd extends React.Component{
	onSubmit = (e)=>{
		let {dispatch} = this.props;
		e.preventDefault();
		let addedTodo = this.refs.newTodo.value;

		if(addedTodo.length > 0){
			this.refs.newTodo.value = '';
			dispatch(actions.addTodo(addedTodo));
		}
		else{
			this.refs.newTodo.focus();
		}
	}

	render(){
		return(
			<div className="container__footer">
				<form onSubmit={this.onSubmit}>
					<input type="text" ref='newTodo' placeholder="Qual será a próxima tarefa?"/>
					<button className="button expanded">Adicionar</button>
				</form>
			</div>
		);
	}
};

export default connect()(TodoAdd)