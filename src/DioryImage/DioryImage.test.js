/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { DioryImage } from './DioryImage'

describe('<DioryImage />', () => {
  let component

  describe('given the image is received as a prop', () => {
    it('renders image from props as a background-image', () => {
      component = shallow(<DioryImage image='some-image' />)
      expect(component.prop('style').backgroundImage).toEqual('url(some-image)')
    })

    it('sets style from props', () => {
      component = shallow(
        <DioryImage
          image='some-image'
          style={{ backgroundImage: 'some-background-image' }}
        />
      )
      expect(component.prop('style').backgroundImage).toEqual('some-background-image')
    })
  })

  describe('given the image is not received as a prop', () => {
    it('does not render the component', () => {
      component = shallow(<DioryImage />)
      expect(component.html()).toBeNull()
    })
  })
})
