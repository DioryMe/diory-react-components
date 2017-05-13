/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { DioryImage } from './DioryImage'

describe('<DioryImage />', () => {
  let component

  describe('given a image as prop', () => {
    it('renders the image as a background-image', () => {
      component = shallow(<DioryImage image='some-image' />)
      expect(component.prop('style').backgroundImage).toEqual('url(some-image)')
    })

    describe('given a style as prop ', () => {
      it('sets style to the image', () => {
        component = shallow(<DioryImage image='some-image' style={{ backgroundImage: 'some-background-image' }} />)
        expect(component.prop('style').backgroundImage).toEqual('some-background-image')
      })
    })
  })

  describe('given no image as props', () => {
    it('does not render the component', () => {
      component = shallow(<DioryImage />)
      expect(component.html()).toBeNull()
    })
  })
})
