import { createTask, fetchTasks } from "./api";
import { CREATING_TASK_SUCCESS, FETCHING_TASKS, FETCHING_TASKS_SUCCESS, FETCHING_TASKS_ERROR } from "./constants";

function fetchingTasks() {
    return {
        type: FETCHING_TASKS
    };
}

function fetchingTasksSuccess(response) {
    return {
        type: FETCHING_TASKS_SUCCESS,
        response
    };
}
function fetchingTasksError(error) {
    return {
        type: FETCHING_TASKS_ERROR,
        error: "Fetching tasks error"
    };
}

export function handleFetchingTasks() {
    return function (dispatch, getState) {
        dispatch(fetchingTasks());
        return fetchTasks()
            .then(( data ) => {
                dispatch(fetchingTasksSuccess(data));
            })
            .catch(error => dispatch(fetchingTasksError(error)));
    };
}

function creatingTaskSuccess(task) {
    console.log(task);
    return {
        type: CREATING_TASK_SUCCESS,
        task
    };
}

export function handleCreatingTask(payload) {
    return function (dispatch) {
        return createTask(payload)
            .then(({data}) =>{
                return dispatch(creatingTaskSuccess(data.message))
            });
    };
}
