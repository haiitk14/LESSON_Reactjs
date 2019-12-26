import { combineReducers } from 'redux'; // Giọ các reducers con lại
import tasks from './tasks';

const myReducer = combineReducers({
	tasks // tasks: tasks
});

export default myReducer;