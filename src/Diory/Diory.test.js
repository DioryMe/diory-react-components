/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Diory from './Diory'

describe('<Diory />', () => {
  let component

  it('sets diory style from props', () => {
    component = shallow(<Diory styles={{ diory: { some: 'style' } }} />)
    expect(component.prop('style').some).toEqual('style')
  })

  describe('a <Image /> within', () => {
    let diory
    let imageComponent
    beforeEach(() => {
      diory = { image: 'some-image', styles: { image: { some: 'image-style' } } }
      component = shallow(<Diory { ...diory } />)
      imageComponent = component.find('Image')
    })

    it('sets image from diory', () => {
      expect(imageComponent.prop('image')).toEqual(diory.image)
    })

    it('sets image styles from diory', () => {
      expect(imageComponent.prop('style')).toEqual(diory.styles.image)
    })
  })

  describe('a <Text /> within', () => {
    let diory
    let textComponent
    beforeEach(() => {
      diory = { text: 'some-text', styles: { text: { some: 'text-style' } } }
      component = shallow(<Diory { ...diory } />)
      textComponent = component.find('Text')
    })

    it('sets text from diory', () => {
      expect(textComponent.prop('text')).toEqual(diory.text)
    })

    it('sets text styles from diory', () => {
      expect(textComponent.prop('style')).toEqual(diory.styles.text)
    })
  })
})
