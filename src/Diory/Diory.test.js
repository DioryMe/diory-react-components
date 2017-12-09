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

  it('renders its children', () => {
    component = shallow(<Diory><div className='children'>some children</div></Diory>)
    expect(component.find('.children').html()).toEqual('<div class="children">some children</div>')
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

  describe('a <Link /> within', () => {
    let getComponent
    let diory
    beforeEach(() => {
      diory = {}
      getComponent = () => shallow(<Diory { ...diory } />).find('Link')
    })

    it('sets link from diory', () => {
      diory.link = 'some-link'
      expect(getComponent().props().link).toEqual('some-link')
    })

    it('sets link styles from diory', () => {
      diory.styles = { link: { some: 'link-style' } }
      expect(getComponent().props().style).toEqual({ some: 'link-style' })
    })
  })

  describe('given contains onClick callback', () => {
    let dioryMock
    let onClickMock
    beforeEach(() => {
      dioryMock = { imageUrl: 'some-image-url', styles: {}, text: 'some-text' }
      onClickMock = jest.fn()
      component = shallow(<Diory { ...dioryMock } onClick={ onClickMock } />)
    })

    describe('when not clicked', () => {
      it('does not call onClick', () => {
        expect(onClickMock).not.toHaveBeenCalled()
      })
    })

    describe('when clicked', () => {
      it('calls onClick', () => {
        component.simulate('click', 'some-event')
        expect(onClickMock).toHaveBeenCalledWith({ diory: dioryMock, event: 'some-event' })
      })
    })
  })
})
