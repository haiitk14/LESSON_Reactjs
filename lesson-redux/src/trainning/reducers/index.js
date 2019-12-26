import status from './status'; // reducer status
import sort from './sort'; // reducer sort
import { combineReducers } from 'redux'; // Tìm hiểu. Gọp các reducer lại

const myReducer = combineReducers({
	status: status,
	sort: sort
});

export default myReducer;