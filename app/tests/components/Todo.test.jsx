import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import Todo from 'Todo';

describe('Todo', ()=>{

	it('Deve existir', ()=>{
		expect(Todo).toExist();
	});

	it('Deve chamar propriedade onToggle com id on click', ()=>{
		let todoData ={
			id: 199,
			text: "todo test",
			completed: true
		};

		let spy = expect.createSpy();
		let todo = TestUtils.renderIntoDocument(<Todo key={todoData.id} {...todoData} onToggle={spy}/>);
		//$el[0]
		let $el = jQuery(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(199);
	});

});