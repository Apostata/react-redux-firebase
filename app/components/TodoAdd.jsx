import React from 'react';

export default class TodoAdd extends React.Component{
	onSubmit = (e)=>{
		e.preventDefault();
		let addedTodo = this.refs.newTodo.value;
		

		if(addedTodo.length > 0){
			this.refs.newTodo.value = '';
			this.props.addTodo(addedTodo);
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
}