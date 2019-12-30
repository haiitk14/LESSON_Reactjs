import { combineReducers } from 'redux'; // Giọ các reducers con lại
import tasks from './tasks';
import toggle from './toggle';
import itemEditing from './itemEditing';

const myReducer = combineReducers({
	tasks, // tasks: tasks
	toggle: toggle,
	itemEditing
});

export default myReducer;