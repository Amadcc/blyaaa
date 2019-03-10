import axios from 'axios';
import { REQUEST_POSTS, CREATE_SUCCESS, CREATE_FAILURE } from './Types'
import * as selectors from './Selector'

/*
  CREATE ORGANIZATION
*/

export function create(values) {

  return (dispatch) => {
    dispatch({ type: REQUEST_POSTS });
    axios.post('https://uxcandy.com/~shapoval/test-task-backend', values)
      .then((res) => {
        dispatch({ type: CREATE_SUCCESS, payload: res });
      })
      .catch((error) => {
        dispatch({ type: CREATE_FAILURE, payload: error });
      })
  }

}