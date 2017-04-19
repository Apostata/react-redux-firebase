import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import expect from 'expect';

import * as actions from 'actions';
//import Actions from 'actions';

var createMockStore = configureMockStore([thunk]);

describe('Redux Actions', ()=>{
	it('Deve gerar a ação para searchText',()=>{
		let action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Alguma pesquisa'
		};

		let res = actions.setSearchText(action.searchText);

		expect(res).toEqual(action);
	});

	it('Deve criar um todo e dispachar ADD_TODO', (done)=>{
		const store = createMockStore({});
		const todoText = 'My todo item';

		store.dispatch(actions.startAddTodo(todoText)).then(()=>{
			const actions = store.getActions();
			expect(actions[0]).toInclude({
				type: 'ADD_TODO'
			});
			expect(actions[0].todo).toInclude({
				text: todoText
			});
			done();
		}).catch(done);
	});

	it('Deve gerar a ação para addTodo',()=>{

		let todo = {
			id: '123fef',
			text: 'Algo para fazer',
			completed: false,
			createdAt: 123545
		}

		let action = {
			type: 'ADD_TODO',
			todo
		};

		let res = actions.addTodo(todo);

		expect(res).toEqual(action);
	});

	it('Deve gerar a ação para addTodos',()=>{
		let todos =[{
			id:1,
			text:'inicial',
			completed: false,
			completedAt: undefined,
			createdAt: 33000
		}];

		
		let action = {
			type: 'ADD_TODOS',
			todos
		};

		let res = actions.addTodos(todos);

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