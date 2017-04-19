import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, {firebaseRef} from 'app/firebase/';

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

	it('Deve gerar a ação para updateTodo',()=>{
		
		let action = {
			type: 'UPDATE_TODO',
			id: 1,
			updates:{
				completed: true,
				completedAt: 1234545
			}
		};

		let res = actions.updateTodo(action.id, action.updates);

		expect(res).toEqual(action);
	});

	describe('Testes com o Firebase(BD)', ()=>{
		let testTodoRef;

		beforeEach((done)=>{
			testTodoRef = firebaseRef.child('todos').push();
			testTodoRef.set({
				text:'Something to do',
				completed: false,
				createdAt: 12342535
			}).then(() => done());
		});

		afterEach((done)=>{
			testTodoRef.remove().then(()=>done());
		});

		it('Deve alternar todos e dispachar ação UPDATE_TODO', (done)=>{
			const store = createMockStore({});

			const action = actions.startUpdateTodo(testTodoRef.key, true);
			store.dispatch(action).then(()=>{
				const mockActions = store.getActions();

				expect(mockActions[0]).toInclude({
					type: 'UPDATE_TODO',
					id: testTodoRef.key,
				});
				expect(mockActions[0].updates).toInclude({
					completed: true,

				});
				expect(mockActions[0].updates.completedAt).toExist();
				done();

			}).catch((e)=>{
				console.log(e);
			});
		});
	});
});