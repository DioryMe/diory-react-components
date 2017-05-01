/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Diory from './Diory'

describe('<Diory />', () => {
  let component

  it('sets diory style from props', () => {
    component = shallow(
      <Diory
        styles={{ diory: { some: 'style' } }}
      />
    )
    expect(component.prop('style')).toEqual({ some: 'style' })
  })

  it('renders text from props', () => {
    component = shallow(<Diory text='some-text' />)
    expect(component.find('DioryText').prop('text')).toEqual('some-text')
  })

  it('sets styles to text from props', () => {
    const styles = { some: 'styles' }
    component = shallow(
      <Diory
        text='some-text'
        styles={ styles }
      />
    )
    expect(component.find('DioryText').prop('styles')).toEqual(styles)
  })

  it('renders image from props', () => {
    component = shallow(<Diory image='some-image' />)
    expect(component.find('DioryImage').prop('image')).toEqual('some-image')
  })

  it('sets styles to image from props', () => {
    const styles = { some: 'styles' }
    component = shallow(
      <Diory
        image='some-image'
        styles={ styles }
      />
    )
    expect(component.find('DioryImage').prop('styles')).toEqual(styles)
  })
})
