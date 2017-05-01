/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Diory from './Diory'

describe('<Diory />', () => {
  let component

  it('renders text from props', () => {
    component = shallow(<Diory text='some-text' />)
    expect(component.find('DioryText').prop('text')).toEqual('some-text')
  })

  it('sets text style from props', () => {
    component = shallow(
      <Diory
        text='some-text'
        styles={{ text: { some: 'style' } }}
      />
    )
    expect(component.find('DioryText').prop('style')).toEqual({ some: 'style' })
  })

  it('renders image from props', () => {
    component = shallow(<Diory image='some-image' />)
    expect(component.find('DioryImage').prop('image')).toEqual('some-image')
  })

  it('sets image style from props', () => {
    component = shallow(
      <Diory
        image='some-image'
        styles={{ image: { some: 'style' } }}
      />
    )
    expect(component.find('DioryImage').prop('style')).toEqual({ some: 'style' })
  })
})
