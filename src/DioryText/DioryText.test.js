/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { DioryText } from './DioryText'

describe('<DioryText />', () => {
  let component

  describe('given a text as prop', () => {
    it('renders the text', () => {
      component = shallow(<DioryText text='some-text' />)
      expect(component.text()).toEqual('some-text')
    })

    describe('given a style as prop', () => {
      it('sets style to the text', () => {
        component = shallow(<DioryText text='some-text' style={{ color: 'some-color' }} />)
        expect(component.prop('style').color).toEqual('some-color')
      })
    })
  })

  describe('given no text as prop', () => {
    it('does not render the component', () => {
      component = shallow(<DioryText />)
      expect(component.html()).toBeNull()
    })
  })
})
