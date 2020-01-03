
import * as types from './../constants/ActionTypes';

var initialState = false;

var myReducer = (state = initialState, action) =>{
	switch( action.type ) {
		case types.TOGGLE_FORM:
			state = action.boolToggle
			return state;
		default: return false;

	}

}

export default myReducer;