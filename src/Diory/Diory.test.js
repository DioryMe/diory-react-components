/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Diory from './Diory'

describe('<Diory />', () => {
  it('renders', () => {
    const wrapper = shallow(<Diory />)
    expect(wrapper.html()).toEqual('<div>Hello, I am a Diory!</div>')
  })
})
