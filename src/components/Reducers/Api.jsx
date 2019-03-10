import { REQUEST_POSTS, CREATE_SUCCESS, CREATE_FAILURE } from '../Actions/Types'

const initialState = {
  data: [],
  loaded: false,
  loading: false,
  error: null
}

const api = (state = initialState, action) => {
  const payload = action.payload

  switch (action.type) {
    case REQUEST_POSTS:

      return {
        ...state,
        loading: true,
        loaded: false
      }

    case CREATE_SUCCESS:
      return {
        ...state,
        data: state.data.concat(payload.data),
        loading: false,
        loaded: true,
        error: null
      }

    case CREATE_FAILURE:

      return {
        ...state,
        loading: false,
        loaded: true,
        error: payload
      }

    default:
      return state
  }
}
export default api;