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

	describe('filterTodos', ()=>{
		let todos = [
				{
					id:1,
					text:'teste api 1',
					completed: true
				},
				{
					id:2,
					text:' teste Algum api 2',
					completed: false
				},
				{
					id:3,
					text:'Algum teste api 3',
					completed: true
				}
		];

		it('Deve retornar todos os todos se showComplete is true',()=>{
			let filteredTodos = TodoApi.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});

		it('Deve retornar apenas todos com completed false (1 apenas) se showComplete is false',()=>{
			let filteredTodos = TodoApi.filterTodos(todos, false, '');
			expect(filteredTodos.length).toBe(1);
		});

		it('Deve organizar os Todos por status completed - mostrando-os por ultimo',()=>{
			let filteredTodos = TodoApi.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		});

		it('Deve filtrar todos por texto',()=>{
			let filteredTodos = TodoApi.filterTodos(todos, true, 'algum');
			expect(filteredTodos.length).toBe(2);
		});

		it('Deve retornar todos Todos se searchText estiver vazio',()=>{
			let filteredTodos = TodoApi.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
	});
})