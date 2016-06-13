import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/app'

test('<App />', t => {
  const expected = 'React development has begun!'
  const wrapper = shallow(React.createElement(App))
  t.deepEqual(wrapper.text(), expected)
})
