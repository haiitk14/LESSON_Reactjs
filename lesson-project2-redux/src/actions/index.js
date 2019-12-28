import * as types from './../constants/ActionTypes';

export const listAll = () => {
	return {
		type: types.LIST_ALL
	}
}

export const addTasks = (task) => {
	return {
		type: types.ADD_TASKS,
		task //task: task
	}
}

export const deleteTasks = (id) => {
	return {
		type: types.DELETE_TASKS,
		id //id: id
	}
}

export const toggleForm = (boolToggle) => {
	return {
		type: types.TOGGLE_FORM,
		boolToggle: boolToggle
	}
}