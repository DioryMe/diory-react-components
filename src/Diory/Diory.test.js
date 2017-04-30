/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Diory from './Diory'

describe('<Diory />', () => {
  let component

  it('renders text from props', () => {
    component = shallow(<Diory text='some-text' />)
    expect(component.text()).toEqual('some-text')
  })
})
