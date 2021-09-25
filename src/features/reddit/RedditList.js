import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { DetailItem } from '../../commons'

import { fetchRedditIfNeeded } from './actions'

const RedditList = () => {
  const name = 'all'
  const dispatch = useDispatch()
  const reddit = useSelector((state) => state.reddit)
  const { isFetching, value, error } = reddit

  useEffect(() => {
    dispatch(fetchRedditIfNeeded(name))
    return () => {
      console.log('Unmount')
    }
  }, [dispatch, name])

  return (
    <div>
      {isFetching ? <p>loading</p> : null}
      {value.map((topic, i) => (
        <DetailItem key={i} title={topic.data.title} />
      ))}
      {error ? <p>{error.message}</p> : null}
    </div>
  )
}

export default RedditList
