/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Image } from './Image'

describe('<Image />', () => {
  let component

  describe('given a image as prop', () => {
    it('renders the image as a background-image', () => {
      component = shallow(<Image image="some-image" />)
      expect(component.prop('style').backgroundImage).toEqual('url(some-image)')
    })

    describe('given a style as prop ', () => {
      it('sets style to the image', () => {
        component = shallow(<Image image="some-image" style={{ backgroundImage: 'some-background-image' }} />)
        expect(component.prop('style').backgroundImage).toEqual('some-background-image')
      })
    })
  })
})
