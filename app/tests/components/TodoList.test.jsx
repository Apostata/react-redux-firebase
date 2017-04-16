import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', ()=>{

	it('Deve existir', ()=>{
		expect(TodoList).toExist();
	});

	it('Deve renderizar um component Todo para cada todo', ()=>{
		let todos = [
			{
				id:1,
				text:'Fazer algo!',
				completed:false,
				completedAt: undefined,
				createtAt: 500
			},
			{
				id:2,
				text:'Checar o e-mail',
				completed:false,
				completedAt: undefined,
				createtAt: 500
			}
		];

		let store = configure({
			todos
		});

		let provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList/>	
			</Provider>
		);
		let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

		expect(todosComponents.length).toBe(todos.length);
	});

	it('Deve renderizar mensagem quando não hover todos', ()=>{
		let todos = [];

		let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		let $el = jQuery(ReactDOM.findDOMNode(todoList));
		expect($el.find('.container__message').length).toBe(1);
	});

});