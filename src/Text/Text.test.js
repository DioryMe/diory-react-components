/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Text } from './Text'

describe('<Text />', () => {
  let component

  describe('given a text as prop', () => {
    it('renders the text', () => {
      component = shallow(<Text text="some-text" />)
      expect(component.text()).toEqual('some-text')
    })

    describe('given a style as prop', () => {
      it('sets style to the text', () => {
        component = shallow(<Text text="some-text" style={{ color: 'some-color' }} />)
        expect(component.prop('style').color).toEqual('some-color')
      })
    })
  })

  describe('given no text as prop', () => {
    it('does not render the component', () => {
      component = shallow(<Text />)
      expect(component.html()).toBeNull()
    })
  })
})
