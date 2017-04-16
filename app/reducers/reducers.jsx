export let searchTextReducer = (state = '', action) => {
	//action.coisa = 2; para testar o deep-freeze. esta linha faz com qua a função deixe de ser pure function
	switch(action.type){
		case 'SET_SEARCH_TEXT':
			return action.searchText;

		default:
			return state;
	}
};

export let showCompletedReducer = (state = false, action) => {
	switch(action.type){
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;

		default:
			return state;
	}
};