/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { DioryText } from './DioryText'

describe('<DioryText />', () => {
  let component

  it('renders text from props', () => {
    component = shallow(<DioryText text='some-text' />)
    expect(component.text()).toEqual('some-text')
  })
})
