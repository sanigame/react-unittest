import React from 'react'

import { shallow } from 'enzyme'

import DetailItem from './DetailItem'

describe('<DetailItem />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<DetailItem title="post title" />)
    expect(wrapper.contains(<p>post title</p>)).toBe(true)
  })
})
