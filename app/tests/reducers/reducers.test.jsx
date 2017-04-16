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
});