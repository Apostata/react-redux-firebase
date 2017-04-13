import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import jQuery from 'jQuery';

import TodoSearch from 'TodoSearch';

describe('TodoSearch',()=>{
	it('Deve existir',()=>{
		expect(TodoSearch).toExist();
	});

	it('Deve chamar o metodo handleSearchTodo quando alterar o texto da busca',()=>{
		let spy = expect.createSpy();
		let todoSearch = TestUtils.renderIntoDocument(<TodoSearch searchTodo={spy}/>);
		
		let searchText = 'Dog';

		todoSearch.refs.getTodo.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.getTodo);

		expect(spy).toHaveBeenCalledWith(false, searchText);
	});

	it('Deve chamar o metodo handleSearchTodo quando checkbox "Mostrar tarefas já finalizdas" for selecionado',()=>{
		let spy = expect.createSpy();
		let todoSearch = TestUtils.renderIntoDocument(<TodoSearch searchTodo={spy}/>);
		
		let isCompleted = true;

		todoSearch.refs.isCompleted.checked = isCompleted;
		TestUtils.Simulate.change(todoSearch.refs.isCompleted);

		expect(spy).toHaveBeenCalledWith(isCompleted, '');
	});

});

