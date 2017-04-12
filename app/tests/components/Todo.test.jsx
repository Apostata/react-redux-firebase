import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtisl from 'react-addons-test-utils';
import jQuery from 'jQuery';

import Todo from 'Todo';

describe('Todo', ()=>{

	it('Deve existir', ()=>{
		expect(Todo).toExist();
	})

});