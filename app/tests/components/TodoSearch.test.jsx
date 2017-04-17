import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import jQuery from 'jQuery';

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch',()=>{
	it('Deve existir',()=>{
		expect(TodoSearch).toExist();
	});

	it('Deve dispachar SET_SEARCH_TEXT no imput de busca',()=>{
		let spy = expect.createSpy();
		let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		
		let searchText = 'Dog';
		let action ={
			type: 'SET_SEARCH_TEXT',
			searchText
		};

		todoSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('Deve dispachar TOGGLE_SHOW_COMPLETED quando checkbox é marcado',()=>{
		let spy = expect.createSpy();
		let todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		
		let action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);

		expect(spy).toHaveBeenCalledWith(action);
	});

});

