
import * as types from './../constants/ActionTypes';

var initialState = false;

var myReducer = (state = initialState, action) =>{
	switch( action.type ) {
		case types.TOGGLE_FORM:
			return action.boolToggle;
		default: return false;

	}

	return state;
}

export default myReducer;