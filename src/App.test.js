import React from 'react'

import { shallow } from 'enzyme'

import App from './App'

describe('<App />', () => {
  it('should render without throwing an error', () => {
    // Shallow จะ Render เฉพาะ Component ที่เราอยู่ จะไม่มีการ Render Children Components ทำให้ทำงานได้รวดเร็วที่สุด
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<h1>Title</h1>)).toBe(true)
  })

  // it('should mount in a full DOM', () => {
  //   // Render จะ Render Components Render Children Components แต่จะไม่มีการเกิด Components Lifecycle และทุกอย่างที่ Render จะถูก Render ออกมาเป็น Static HTML
  //   const wrapper = mount(<App />)
  //   expect(wrapper.find('.app').length).toBe(1)
  // })

  // it('should render to static HTML', () => {
  //   // Mount จะ Render แบบ Full DOM นั่นก็คือ Render Components Render Children Components ทั้งหมด รวมทั้งมีการเกิด Component Lifecycle ทำให้ Mount ทำงานช้าที่สุด เนื่องจากทุกอย่างจะทำงานเหมือนจริง
  //   const wrapper = render(<App />)
  //   expect(wrapper.text()).toEqual('Title')
  // })
})
