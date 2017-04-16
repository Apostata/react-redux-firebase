import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import TodoApp from 'TodoApp';
import TodoList from 'TodoList';

import * as configureStore from 'configureStore';


describe('TodoApp', ()=>{

	it('Deve existir', ()=>{
		expect(TodoApp).toExist();
	});

	it('Deve renderizar TodoList',()=>{
		const store = configureStore.configure();
		let provider = TestUtils.renderIntoDocument(
		<Provider store={store}>
			<TodoApp/>
		</Provider>);

		let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
		let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
		expect(todoList.length).toEqual(1);
	});
});