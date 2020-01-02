
import * as types from './../constants/ActionTypes';

var initialState = "";

var myReducer = (state = initialState, action) =>{
	switch( action.type ) {
		case types.SEARCH_TASKS:
			console.log("OKOK");
			return state;
		default: return false;

	}

	return state;
}

export default myReducer;