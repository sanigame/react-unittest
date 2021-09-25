import axios from 'axios'

export const FETCH_REDDIT_REQUEST = 'FETCH_REDDIT_REQUEST'
export const FETCH_REDDIT_SUCCESS = 'FETCH_REDDIT_SUCCESS'
export const FETCH_REDDIT_FAILURE = 'FETCH_REDDIT_FAILURE'

const fetchRedditFailure = (error, name) => ({
  type: FETCH_REDDIT_FAILURE,
  payload: error.message,
  name,
})

const fetchRedditSuccess = (payload) => ({
  type: FETCH_REDDIT_SUCCESS,
  payload,
})

const fetchReddit =
  (name = 'all') =>
  async (dispatch) => {
    dispatch({ type: FETCH_REDDIT_REQUEST, name })

    try {
      const res = await axios.get(`https://www.reddit.com/r/${name}/hot.json`)
      dispatch(fetchRedditSuccess(res.data))
    } catch (error) {
      dispatch(fetchRedditFailure(error))
    }
  }

const shouldFetchReddit = (state, name) => {
  const reddit = state.reddit[name]
  if (!reddit || reddit.error) {
    return true
  }

  return false
}

export const fetchRedditIfNeeded = (name) => (dispatch, getState) => {
  if (shouldFetchReddit(getState(), name)) {
    return dispatch(fetchReddit(name))
  }

  return null
}
