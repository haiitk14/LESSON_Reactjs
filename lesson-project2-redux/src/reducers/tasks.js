import * as types from './../constants/ActionTypes';

var initialState = [
	{
        id: 1,
        name: "Lập trình cơ bản",
        status: 1
    },
    {
        id: 2,
        name: "Lập trình nâng cao",
        status: 1
    },
    {
        id: 3,
        name: "AAAAA",
        status: 0
    },
    {
        id: 4,
        name: "BBBBBBB",
        status: 0
    }	
];

var myReducer = (state = initialState, action) => {
	switch (action.type) {

		case types.LIST_ALL:
			return state;

		case types.ADD_TASKS:
			state.push(action.task);
			return [...state]; // copy state mới

		case types.DELETE_TASKS:
			state = state.filter(job => job.id !== action.id ); 
			return [...state]; // copy state mới


		default: return state;
	}

	return state;
}

export default myReducer;