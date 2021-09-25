import React from 'react'

import { shallow } from 'enzyme'

import Home from './Home'

describe('<Home />', () => {
  it('should render .homepage', () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find('.homepage').length).toBe(1)
  })
})
