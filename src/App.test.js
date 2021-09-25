import React from 'react'

import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import App from './App'

const mockStore = configureMockStore([thunk])

describe('<App />', () => {
  const store = mockStore({
    reddit: {
      isFetching: false,
      value: [],
      error: null,
    },
  })

  it('should render without throwing an error', () => {
    // Shallow จะ Render เฉพาะ Component ที่เราอยู่ จะไม่มีการ Render Children Components ทำให้ทำงานได้รวดเร็วที่สุด
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<h1>Title</h1>)).toBe(true)
  })

  it('should mount in a full DOM', () => {
    // Render จะ Render Components Render Children Components แต่จะไม่มีการเกิด Components Lifecycle และทุกอย่างที่ Render จะถูก Render ออกมาเป็น Static HTML
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    expect(wrapper.find('.app').length).toBe(1)
  })

  // it('should render to static HTML', () => {
  //   // Mount จะ Render แบบ Full DOM นั่นก็คือ Render Components Render Children Components ทั้งหมด รวมทั้งมีการเกิด Component Lifecycle ทำให้ Mount ทำงานช้าที่สุด เนื่องจากทุกอย่างจะทำงานเหมือนจริง
  //   const wrapper = render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>,
  //   )
  //   expect(wrapper.text()).toEqual('Title')
  // })
})
