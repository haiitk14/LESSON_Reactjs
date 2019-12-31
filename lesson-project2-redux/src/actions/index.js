import * as types from './../constants/ActionTypes';

export const listAll = () => {
	return {
		type: types.LIST_ALL
	}
}

export const saveTask = (task) => {
	return {
		type: types.SAVE_TASK,
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

export const updateStatusTask = (id) => {
	return {
		type: types.UPDATE_STATUS_TASK,
		id //id: id
	}
}

export const editTask = (task) => {
	return {
		type: types.EDIT_TASK,
		task //task: task
	}
}
export const searchTasks = (txtSearch) => {
	return {
		type: types.SEARCH_TASKS,
		txtSearch
	}
}