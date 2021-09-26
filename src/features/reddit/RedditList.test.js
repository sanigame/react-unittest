import React from 'react'

import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import DetailItem from '../../components/DetailItem'

import RedditList from './RedditList'

const mockStore = configureMockStore([thunk])

describe('<RedditList />', () => {
  it('should render', () => {
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

  it('should render .reddit', () => {
    const store = mockStore({
      reddit: {
        isFetching: false,
        value: [],
        error: null,
      },
    })
    const wrapper = mount(
      <Provider store={store}>
        <RedditList />
      </Provider>,
    )
    expect(wrapper.find('.reddit').length).toBe(1)
  })

  it('should render post item', () => {
    const store = mockStore({
      reddit: {
        isFetching: false,
        value: [
          {
            data: {
              title: 'title1',
            },
          },
          {
            data: {
              title: 'title2',
            },
          },
          {
            data: {
              title: 'title3',
            },
          },
          {
            data: {
              title: 'title4',
            },
          },
          {
            data: {
              title: 'title5',
            },
          },
        ],
        error: null,
      },
    })
    const wrapper = mount(
      <Provider store={store}>
        <RedditList />
      </Provider>,
    )
    expect(wrapper.find(DetailItem).length).toBe(5)
  })

  it('should render loading', () => {
    const store = mockStore({
      reddit: {
        isFetching: true,
        value: [],
        error: null,
      },
    })
    const wrapper = mount(
      <Provider store={store}>
        <RedditList />
      </Provider>,
    )
    expect(wrapper.contains(<p>loading</p>)).toBe(true)
  })

  it('should render error message', () => {
    const store = mockStore({
      reddit: {
        isFetching: false,
        value: [],
        error: {
          message: 'error',
        },
      },
    })
    const wrapper = mount(
      <Provider store={store}>
        <RedditList />
      </Provider>,
    )
    expect(wrapper.contains(<p>error</p>)).toBe(true)
  })
})
