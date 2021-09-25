import React from 'react'

import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import RedditList from '../features/reddit/RedditList'

import Home from './Home'

const mockStore = configureMockStore([thunk])

describe('<Home />', () => {
  it('should render .homepage', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.homepage').length).toBe(1)
  })

  it('should render <RedditList />', () => {
    const store = mockStore({
      reddit: {
        isFetching: false,
        value: [],
        error: null,
      },
    })
    const wrapper = shallow(
      <Provider store={store}>
        <RedditList />
      </Provider>,
    )
    expect(wrapper.find(RedditList).length).toBe(1)
  })
})
