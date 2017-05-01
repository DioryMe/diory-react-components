/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { DioryImage } from './DioryImage'

describe('<DioryImage />', () => {
  let component

  it('renders image from props as a background-image', () => {
    component = shallow(<DioryImage image='some-image' />)
    expect(component.prop('style').backgroundImage).toEqual('url(some-image)')
  })
})
