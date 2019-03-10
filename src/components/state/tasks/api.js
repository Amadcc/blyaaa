import axios from 'axios';


export function fetchTasks() {
    console.log(axios.get('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name'))
    return axios.get('https://uxcandy.com/~shapoval/test-task-backend/?developer=Name');
}
export function createTask(payload) {
    var form = new FormData();
    form.append("username", "Example");
    form.append("email", "example@example.com");
    form.append("text", "Some text");
    return axios.post('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Name', form);
}