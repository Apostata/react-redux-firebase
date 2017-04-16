import expect from 'expect';

import * as actions from 'actions';
//import Actions from 'actions';

describe('Redux Actions', ()=>{
	it('Deve gerar a ação para searchText',()=>{
		let action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Alguma pesquisa'
		};

		let res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	it('Deve gerar a ação para addTodo',()=>{
		let action = {
			type: 'ADD_TODO',
			text: 'algo para fazer'
		};

		let res = actions.addTodo(action.text);

		expect(res).toEqual(action);
	});

	it('Deve gerar a ação para toggleShowCompleted',()=>{
		let action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		};

		let res = actions.toggleShowCompleted();

		expect(res).toEqual(action);
	});

	it('Deve gerar a ação para toggleTodo',()=>{
		let action = {
			type: 'TOGGLE_TODO',
			id: 1
		};

		let res = actions.toggleTodo(action.id);

		expect(res).toEqual(action);
	});
});