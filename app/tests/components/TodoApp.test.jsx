import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import jQuery from 'jQuery';

import TodoApp from 'TodoApp';

describe('TodoApp', ()=>{

	it('Deve existir', ()=>{
		expect(TodoApp).toExist();
	})

});