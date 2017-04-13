import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import TodoApp from 'TodoApp';

describe('TodoApp', ()=>{

	it('Deve existir', ()=>{
		expect(TodoApp).toExist();
	});

	it('Deve adicionar um Todo ao state todos no metodo handleAddTodo', ()=>{
		let todoText = 'teste todo text';

		let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({
			todos: []
		});

		todoApp.handleAddTodo(todoText);
		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

});