import React from 'react';

export default class TodoSearch extends React.Component{
	onChange = ()=>{
		let searchedTodo = this.refs.getTodo.value;
		let isCompleted = this.refs.isCompleted.checked;
		this.props.searchTodo(isCompleted, searchedTodo);
	}

	render(){
		return(
			<div className="container__header">
				<div>
					<input type="text" ref="getTodo" placeholder="Buscar Tarefa" onChange={this.onChange}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="isCompleted" onChange={this.onChange}/>
						Mostrar tarefas já finalizadas!
					</label>
				</div>
			</div>
		);
	}
}