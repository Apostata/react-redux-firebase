import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import {Todo} from 'Todo';

describe('Todo', ()=>{

	it('Deve existir', ()=>{
		expect(Todo).toExist();
	});

	it('Deve dispachar TOGGLE_TODO com id on click', ()=>{
		let todoData ={
			id: 199,
			text: "todo test",
			completed: true
		};

		let spy = expect.createSpy();
		let todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} dispatch={spy}/>);
		//$el[0]
		let $el = jQuery(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith({
			type: 'TOGGLE_TODO',
			id: todoData.id
		});
	});

});