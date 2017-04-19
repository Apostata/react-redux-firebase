import React from 'react';
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
 
export default class TodoApp extends React.Component{

	render(){
		
		return(
			<div>
				<h1 className="page-title">Todo App</h1>
				<div className="row">
					<div className="column small-centered small-11 medium-6 large-5">
						<div className="container">
							<TodoSearch/>
							<TodoList/>
							<TodoAdd />
						</div>
					</div>
				</div>
			</div>
		)
	}
}