import expect from 'expect';

import TodoApi from 'TodoApi';

describe('TodoApi', ()=>{
	beforeEach (()=>{
		localStorage.removeItem('todos');
	});

	it('Deve existir', ()=>{
		expect(TodoApi).toExist();
	});

	describe('setTodos', ()=>{
		it('Deve adicionar um todo válido', ()=>{
			let todos = [
				{
					id:23,
					text:'teste todos api',
					completed: false
				}
			];

			TodoApi.setTodos(todos);
			let actualTodos = JSON.parse(localStorage.getItem('todos'));
			expect(actualTodos).toEqual(todos);//compara valores vs toBe compara no mesmo local da memória
		});

		it('Não deve adicionar um todo inválido', ()=>{
			let todos = {
				a: 'b'
			};

			TodoApi.setTodos(todos);
			expect(localStorage.getItem('todos')).toBe(null);
		})
	});

	describe('getTodos', ()=>{
		it('deve retornar um array vazio se os dados não forem válidos', ()=>{
			let actualTodos = TodoApi.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('deve retornar todos se os dados forem válidos', ()=>{
			let todos = [
				{
					id:23,
					text:'teste todos api',
					completed: false
				}
			];

			localStorage.setItem('todos', JSON.stringify(todos));
			let actualTodos = TodoApi.getTodos();
			expect(actualTodos).toEqual(todos);
		});
	});
})