import React from 'react';

export default class Todo extends React.Component{
	handleToggle = ()=>{
		let id = this.props.id;
		this.props.onToggle(id);
	}

	render(){
		let {text, id, completed} = this.props;
		return(
			<div onClick={this.handleToggle}>
				<input type="checkbox" checked={completed} readOnly/>
				{text}
			</div>
		)
	}
}