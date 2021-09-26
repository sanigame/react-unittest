import React from 'react'

import { shallow } from 'enzyme'

import DetailItem from './DetailItem'

describe('<DetailItem />', () => {
  it('should render without props', () => {
    const wrapper = shallow(<DetailItem />)
    expect(wrapper.contains(<p>default</p>)).toBe(true)
  })
  it('should render with props', () => {
    const wrapper = shallow(<DetailItem title="post title" />)
    expect(wrapper.contains(<p>post title</p>)).toBe(true)
  })
})
