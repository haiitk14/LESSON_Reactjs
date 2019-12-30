import * as types from './../constants/ActionTypes';

var initialState = {
	id: 0,
	name: "",
	status: "true"
};

var myReducer = (state = initialState, action) => {
	switch (action.type) {

		case types.EDIT_TASK:
			return action.task;

		default: return state;
	}

	return state;
}

export default myReducer;