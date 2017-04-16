import expect from 'expect';
import df from 'deep-freeze-strict'; //testar de alguma variável passada é atualizada, pois reducers são pure functions e não podem alterar
import * as reducers from 'reducers';

describe('Redux Reducers',()=>{
	describe('searchTextReducer', ()=>{
		it('Deve setar searchText',()=>{
			let action = {
				type:'SET_SEARCH_TEXT',
				searchText: 'Alguma busca'
			};
			let res = reducers.searchTextReducer(df(''), df(action));

			expect(res).toEqual(action.searchText);
		});
	});

	describe('showCompletedReducer', ()=>{
		it('Deve alternar entre true e false',()=>{
			let action = {
				type:'TOGGLE_SHOW_COMPLETED'
			};

			var res = reducers.showCompletedReducer(df(false), df(action));
			expect(res).toEqual(true);
		});
	});

	describe('todosReducer', ()=>{
		it('Deve adicionar novo todo',()=>{
			let action = {
				type:'ADD_TODO',
				text:'Novo Todo'
			};

			var res = reducers.todosReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		});

		it('Deve alternar completed e completedAt',()=>{
			let testTodo = [{
				id: 1,
				text: 'Teste todo',
				completed: false,
				createdAt: 123334,
				completedAt: undefined

			}];
			
			let action = {
				type:'TOGGLE_TODO',
				id:1
			};

			var res = reducers.todosReducer(df(testTodo), df(action));
			expect(res.length).toEqual(1);
			expect(res[0].completed).toEqual(true);
			expect(res[0].completedAt).toExist();
			expect(res[0].completedAt).toBeA('number');
		});
	});
});