import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import TodoAdd from 'TodoAdd';

describe('TodoAdd', ()=>{
	it('deve existir', ()=>{
		expect(TodoAdd).toExist();
	});

	it('Deve chamar a função handleAddTodo com dados válidos', ()=>{
		let spy = expect.createSpy();
		let todoAdd = TestUtils.renderIntoDocument(<TodoAdd addTodo={spy}/>);
		let $el = jQuery(ReactDOM.findDOMNode(todoAdd));

		const todoText = 'Ver e-mails';

		todoAdd.refs.newTodo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});

	it('Não Deve chamar a função handleAddTodo com dados inválidos', ()=>{
		let spy = expect.createSpy();
		let todoAdd = TestUtils.renderIntoDocument(<TodoAdd addTodo={spy}/>);
		let $el = jQuery(ReactDOM.findDOMNode(todoAdd));

		const todoText = '';

		todoAdd.refs.newTodo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	});
})