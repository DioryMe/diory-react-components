/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { DioryText } from './DioryText'

describe('<DioryText />', () => {
  let component

  describe('given the text is received as props', () => {
    it('renders the text', () => {
      component = shallow(<DioryText text='some-text' />)
      expect(component.text()).toEqual('some-text')
    })

    it('sets style from props', () => {
      component = shallow(
        <DioryText text='some-text' styles={{ text: { color: 'some-color' } }} />
      )
      expect(component.prop('style').color).toEqual('some-color')
    })
  })

  describe('given the text is not received as props', () => {
    it('does not render the component', () => {
      component = shallow(<DioryText />)
      expect(component.html()).toBeNull()
    })
  })
})
