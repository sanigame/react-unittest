import React from 'react'

import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import RedditList from './RedditList'

const mockStore = configureMockStore([thunk])

describe('<RedditList />', () => {
  const store = mockStore({
    reddit: {
      isFetching: false,
      value: [],
      error: null,
    },
  })

  it('should render', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <RedditList />
      </Provider>,
    )
    expect(wrapper.find(RedditList).length).toBe(1)
  })

  it('should render .reddit', () => {
    const wrapper = mount(
      <Provider store={store}>
        <RedditList />
      </Provider>,
    )
    expect(wrapper.find('.reddit').length).toBe(1)
  })
})
