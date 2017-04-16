export let setSearchText = (searchText) =>{
	return{
		type:'SET_SEARCH_TEXT',
		searchText
	}
};

export let toggleShowCompleted = ()=>{
	return{
		type:'TOGGLE_SHOW_COMPLETED'
	}
};

export let addTodo = (text) =>{
	return{
		type:'ADD_TODO',
		text
	}
};

export let toggleTodo = (id) =>{
	return{
		type:'TOGGLE_TODO',
		id
	}
};

/*export default class Actions{
	static setSearchText(searchText){
		return{
			type:'SET_SEARCH_TEXT',
			searchText
		}
	}

	static addTodo(text){
		return{
			type:'ADD_TODO',
			text
		}
	}
}*/