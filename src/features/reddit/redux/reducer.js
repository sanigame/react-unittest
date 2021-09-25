import { FETCH_REDDIT_REQUEST, FETCH_REDDIT_SUCCESS, FETCH_REDDIT_FAILURE } from './actions'
const initialState = {
  isFetching: false,
  value: [],
  error: null,
}

const reddit = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REDDIT_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      }
    case FETCH_REDDIT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        value: payload.data.children,
      }
    case FETCH_REDDIT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload,
      }
    default:
      return state
  }
}

export default reddit
