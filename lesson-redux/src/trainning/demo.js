import { createStore } from 'redux';
import { status, sort } from './actions/index'; // actions status, sort
import myReducer from './reducers/index'; // reducers


const store = createStore(myReducer); // Khởi tạo STORE
console.log("Default: ", store.getState());
// Thay đổi state

store.dispatch(status()); // đẩy action lên reducers. (dispatch đẩy dữ liệu)

console.log("TOGGLE ", store.getState());

// Sắp xếp name Z->A

store.dispatch(sort({
	by: "name",
	value: -1
}));
console.log("SORT ", store.getState());
