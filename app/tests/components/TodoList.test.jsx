import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', ()=>{

	it('Deve existir', ()=>{
		expect(TodoList).toExist();
	});

	it('Deve renderizar um component Todo para cada todo', ()=>{
		let todos = [
			{
				id:1,
				text:'Fazer algo!'
			},
			{
				id:2,
				text:'Checar o e-mail'
			}
		];

		let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);
	});

});