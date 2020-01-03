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
            console.log(action);
            let task = {
                id: action.task.id ,
                name: action.task.name,
                status: action.task.status
            }
            if (!task.id) {
                task.id = Math.floor(Math.random() * 1000);
                state.push(task);
            } else {
                let index = findIndex(state, task.id);
               state[index] = task;
            }
			return [...state]; // copy [] state mới

		case types.DELETE_TASKS:
			state = state.filter(job => job.id !== action.id ); 
            return [...state]; // copy [] state mới
            
        case types.UPDATE_STATUS_TASK:
            console.log("aaaa");
            let id = action.id;
            let indexx = findIndex(state, id);
            
            //------------ Cách 1 ------
            // var cloneTask = {...state[index]};
            // cloneTask.status = cloneTask.status === 1 ? 0 : 1;
            // state[index] = cloneTask;

            // ----------- Cách 2 ------
            state[indexx] = {
                ...state[indexx],
                status: state[indexx].status = !state[indexx].status
            }
            return [...state];

        case types.SORT_TASKS:
            let cloneTask = state;
            switch(action.txtSort) {
                case "AZ":
                    cloneTask.sort((a, b) => (a.name > b.name) ? 1 : -1);
                    break;
                case "ZA":
                    cloneTask.sort((a, b) => (a.name > b.name) ? 1 : -1);
                    cloneTask.reverse();
                    break;
                case "Hide":
                    break;
                case "Active":
                    break;
                default:
                    break;

            }
            state = cloneTask;
            return [...state];
		default: return state;
	}
}

export default myReducer;