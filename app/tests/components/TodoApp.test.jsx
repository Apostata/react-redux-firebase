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
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
		
	});

	it('Deve alternar setar para completed true quando handleTodoToggle checado', ()=>{
		let todoData = {
			id: 11,
			text:'Teste completed',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};

		let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos:[todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleTodoToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('Deve setar para completed false quando handleTodoToggle é deschecado', ()=>{
		let todoData = {
			id: 11,
			text:'Teste completed',
			completed: true,
			createdAt: 0,
			completedAt: 1
		};

		let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos:[todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleTodoToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();
	});

});