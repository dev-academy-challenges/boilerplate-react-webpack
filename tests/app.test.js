import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from '../client/components/App'

Enzyme.configure({adapter: new Adapter()})

test('<App />', () => {
  const expected = 'React development has begun!'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toBe(expected)
})
