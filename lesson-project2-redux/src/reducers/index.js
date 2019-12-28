import { combineReducers } from 'redux'; // Giọ các reducers con lại
import tasks from './tasks';
import toggle from './toggle';

const myReducer = combineReducers({
	tasks, // tasks: tasks
	toggle: toggle
});

export default myReducer;