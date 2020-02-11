import * as taskConstants from './../constants/task';
import { toastError } from '../helper/toastHelper';

var initialState = {
	listStask: []
};

var reducer = (state = initialState, action) => {
	switch (action.type) {
		case taskConstants.FETCH_TASK:
			return {
				...state,
				listStask: []
			}
		case taskConstants.FETCH_TASK_SUCCESS:
			let { data } = action.payload;
			return {
				...state,
				listStask: data
			}
		case taskConstants.FETCH_TASK_FAILED:
			let { error } = action.payload;
			toastError(error);
			return {
				...state,
				listStask: []
			}
		default: return state;

	}
}

export default reducer;