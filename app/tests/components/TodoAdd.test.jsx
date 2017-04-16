import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import {TodoAdd} from 'TodoAdd';

describe('TodoAdd', ()=>{
	it('deve existir', ()=>{
		expect(TodoAdd).toExist();
	});

	it('Deve dispachar ADD_TODO com um texto válido', ()=>{
		let spy = expect.createSpy();
		let todoAdd = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
		let $el = jQuery(ReactDOM.findDOMNode(todoAdd));

		const todoText = 'Ver e-mails';
		let action = {
			type: "ADD_TODO",
			text: todoText
		};

		todoAdd.refs.newTodo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('Não deve dispachar ADD_TODO com um texto inválido', ()=>{
		let spy = expect.createSpy();
		let todoAdd = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
		let $el = jQuery(ReactDOM.findDOMNode(todoAdd));

		const todoText = '';
		let action = {
			type: 'ADD_TODO',
			text: todoText
		};

		todoAdd.refs.newTodo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
})