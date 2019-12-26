import { createStore } from 'redux';

var initialState = {
	status: false,
	sort: {
		by: "name",
		value: 1
	}
};

var myReducer = (state = initialState, action) => {
	//console.log(action);

	if (action.type === "TOGGLE_STATUS") {
		state.status = !state.status;
	}
	if (action.type === "SORT") {

		var { by, value } = action.sort;
		var {status} = state;

		return {
			status: status,
			sort: {
				by: by,
				value: value
			}
		}

		// state.sort = {
		// 	by: action.sort.by,
		// 	value: action.sort.value
		// }
	}

	return state;
}

const store = createStore(myReducer);
console.log("Default: ", store.getState());
// Thay đổi state
var action = {
	type: "TOGGLE_STATUS"
};

store.dispatch(action);

console.log("TOGGLE ", store.getState());

// Sắp xếp name Z->A

var sortAction = {
	type: "SORT",
	sort: {
		by: "name",
		value: -1
	}
}
store.dispatch(sortAction);
console.log("SORT ", store.getState());
