import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class TodoSearch extends React.Component{
	
	render(){
		let {dispatch, showCompleted, searchText} = this.props;
		return(
			<div className="container__header">
				<div>
					<input type="text" ref="searchText" placeholder="Buscar Tarefa" value={searchText} onChange={()=>{
						let searchText = this.refs.searchText.value;
						dispatch(actions.setSearchText(searchText));
					}}/>
				</div>
				<div>
					<label>
						<input type="checkbox" ref="showCompleted" checked={showCompleted} onChange={()=>{
							dispatch(actions.toggleShowCompleted());
						}}/>
						Mostrar tarefas já finalizadas!
					</label>
				</div>
			</div>
		);
	}
};

export default connect(
	(state)=>{
		return{
			showComplete:state.showCompleted,
			searchText: state.searchText
		}
	}
)(TodoSearch);