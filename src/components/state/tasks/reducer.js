import {
    CREATING_TASK_SUCCESS,
    FETCHING_TASKS,
    FETCHING_TASKS_SUCCESS
} from "./constants";

const initialState = {
    fetchingTasksError: "",
    isFetchingTasks: true,
    data: {},
};

function tasks(state = initialState, action) {
    switch (action.type) {
        case FETCHING_TASKS:
            return {
                ...state,
                isFetchingTasks: true
            };
        case FETCHING_TASKS_SUCCESS:
            return {
                ...state,
                isFetchingTasks: false,
                error: "",
                data: action.response.data.message.tasks || {},
            };

        case CREATING_TASK_SUCCESS:
            console.log("action",action);
            return {
                ...state,
                data: {
                    ...state.data,
                    [action.task.id] : action.task
                }                
            };

        default:
            return state;
    }
}

export default tasks;
