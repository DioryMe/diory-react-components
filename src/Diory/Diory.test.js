/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Diory from './Diory'

describe('<Diory />', () => {
  let getComponent
  let diory

  beforeEach(() => {
    diory = {}
    getComponent = () => shallow(<Diory {...diory} />)
  })

  it('sets diory style from props', () => {
    const dioryStyle = {some: 'style'}
    diory.style = dioryStyle
    expect(getComponent().props().style).toMatchObject(dioryStyle)
  })

  it('renders children', () => {
    const component = shallow(
      <Diory style={{diory: {some: 'style'}}}>
        <div className="some-children"/>
      </Diory>,
    )
    expect(component.find('.some-children').exists()).toEqual(true)
  })

  describe('given an image, a <Image /> within', () => {
    beforeEach(() => {
      diory.image = 'some-image'
      getComponent = () => shallow(<Diory {...diory} />).find('Image')
    })

    it('sets image from diory', () => {
      expect(getComponent().prop('image')).toEqual(diory.image)
    })

    it('sets image style from diory', () => {
      diory.style = {image: {some: 'image-style'}}
      expect(getComponent().prop('style')).toEqual(diory.style.image)
    })
  })

  describe('given a text, a <Text /> within', () => {
    beforeEach(() => {
      diory.text = 'some-text'
      getComponent = () => shallow(<Diory {...diory} />).find('Text')
    })

    it('sets text from diory', () => {
      expect(getComponent().prop('text')).toEqual(diory.text)
    })

    it('sets text style from diory', () => {
      diory.style = {text: {some: 'text-style'}}
      expect(getComponent().prop('style')).toEqual(diory.style.text)
    })
  })

  describe('given a link, a <Link /> within', () => {
    beforeEach(() => {
      diory.link = 'some-link'
      getComponent = () => shallow(<Diory {...diory} />).find('Link')
    })

    it('sets link from diory', () => {
      expect(getComponent().props().link).toEqual('some-link')
    })

    it('sets link style from diory', () => {
      diory.style = {link: {some: 'link-style'}}
      expect(getComponent().props().style).toEqual({some: 'link-style'})
    })
  })

  describe('given contains onClick callback', () => {
    let component
    let onClickMock
    beforeEach(() => {
      onClickMock = jest.fn()
      diory.onClick = onClickMock
    })

    describe('when not clicked', () => {
      it('does not call onClick', () => {
        getComponent()
        expect(onClickMock).not.toHaveBeenCalled()
      })
    })

    describe('when clicked', () => {
      it('calls onClick', () => {
        diory.some = 'diory'
        diory.onClick = onClickMock
        component = getComponent()
        component.simulate('click', 'some-event')
        expect(onClickMock).toHaveBeenCalledWith({diory: {some: 'diory'}, event: 'some-event'})
      })
    })
  })
})
