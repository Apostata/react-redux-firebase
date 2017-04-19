import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import {Todo} from 'Todo';

import * as actions from 'actions';

describe('Todo', ()=>{

	it('Deve existir', ()=>{
		expect(Todo).toExist();
	});

	it('Deve dispachar UPDATE_TODO com id on click', ()=>{
		let todoData ={
			id: 199,
			text: "todo test",
			completed: true
		};

		let spy = expect.createSpy();
		let todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} dispatch={spy}/>);
		let $el = jQuery(ReactDOM.findDOMNode(todo));

		let action = actions.startUpdateTodo(todoData.id, !todoData.completed);

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

});