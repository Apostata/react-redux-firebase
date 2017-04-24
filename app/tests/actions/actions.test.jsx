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

	it('Deve gerar a ação para getTodos',()=>{
		let todos =[{
			id:1,
			text:'inicial',
			completed: false,
			completedAt: undefined,
			createdAt: 33000
		}];

		
		let action = {
			type: 'GET_TODOS',
			todos
		};

		let res = actions.getTodos(todos);

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

	it('Deve gerar a ação para login',()=>{
		
		let action = {
			type: 'LOGIN',
			uid: 1234,
		};

		let res = actions.login(action.uid);

		expect(res).toEqual(action);
	});

	it('Deve gerar a ação para logout',()=>{
		
		let action = {
			type: 'LOGOUT'
		};

		let res = actions.logout();

		expect(res).toEqual(action);
	});

	describe('Testes com o Firebase(BD)', ()=>{
		let testTodoRef;
		let uid;
		let todosRef;

		beforeEach((done)=>{

			firebase.auth().signInAnonymously()
			.then((user)=>{
				uid = user.uid;
				todosRef = firebaseRef.child(`users/${uid}/todos`);
				
				return todosRef.remove();//returning a promise
			}).then(()=>{
				testTodoRef = todosRef.push();

				return testTodoRef.set({
					text: 'Alguma coisa para fazer',
					completed: false,
					createdAt: 12343434
				});
			}).then(()=>done())
			.catch(done);			
		});

		afterEach((done)=>{
			todosRef.remove().then(()=>done());
		});

		it('Deve alternar todos e dispachar ação UPDATE_TODO', (done)=>{
			const store = createMockStore({auth:{uid}});

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

			}).catch(done());
		});

		it('Deve dispachar ação startGetTodos e verificar se GET_TODO é dispachado como resultado', (done)=>{
			const store = createMockStore({auth:{uid}});
			const action = actions.startGetTodos(testTodoRef);
			store.dispatch(action).then(()=>{
				const mockActions = store.getActions();

				expect(mockActions[0]).toInclude({
					type: 'GET_TODOS',
					todo:testTodoRef

				});
				done();

			}).catch(done());
		});

		it('Deve criar um todo e dispachar ADD_TODO', (done)=>{
			const store = createMockStore({auth:{uid}});
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
	});
});