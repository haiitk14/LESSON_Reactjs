import * as types from './../constants/ActionTypes';

var initialState = [
	{
        id: 1,
        name: "Lập trình cơ bản",
        status: true
    },
    {
        id: 2,
        name: "Lập trình nâng cao",
        status: true
    },
    {
        id: 3,
        name: "Học ReactJS",
        status: false
    },
    {
        id: 4,
        name: "Học Redux",
        status: false
    }	
];

var findIndex = (tasks, id) => {
    var res = -1;
    tasks.forEach(function (item, index) {
        if (item.id === id) {
            res = index;
        }
    });
    return res;
}

var myReducer = (state = initialState, action) => {
	switch (action.type) {

		case types.LIST_ALL:
			return state;

		case types.SAVE_TASK:
            var task = {
                id: action.task.id ,
                name: action.task.name,
                status: action.task.status
            }
            if (!task.id) {
                task.id = Math.floor(Math.random() * 1000);
                state.push(task);
            } else {
               var index = findIndex(state, task.id);
               state[index] = task;
            }
			return [...state]; // copy [] state mới

		case types.DELETE_TASKS:
			state = state.filter(job => job.id !== action.id ); 
            return [...state]; // copy [] state mới
            
        case types.UPDATE_STATUS_TASK:
            var id = action.id;
            var index = findIndex(state, id);
            
            //------------ Cách 1 ------
            // var cloneTask = {...state[index]};
            // cloneTask.status = cloneTask.status === 1 ? 0 : 1;
            // state[index] = cloneTask;

            // ----------- Cách 2 ------
            state[index] = {
                ...state[index],
                status: state[index].status = !state[index].status
            }
            return [...state];
        
            case types.SEARCH_TASKS:
                var txtSearch = action.txtSearch;
                console.log(txtSearch);
                // var array = [];

                // [...state].forEach((element, index) => {
                //     if (element.name.toLowerCase().includes(txtSearch.trim().toLowerCase())) {
                //         array.push(element);
                //     }
                // });
                // state = array;

                return [...state];

		default: return state;
	}

	return state;
}

export default myReducer;