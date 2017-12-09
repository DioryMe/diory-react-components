/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import { Link } from './Link'

describe('<Link />', () => {
  let getComponent
  let props

  beforeEach(() => {
    props = {}
    getComponent = () => shallow(<Link { ...props } />)
  });

  describe('given a link as prop', () => {
    beforeEach(() => {
      props.link = 'some-link'
    });

    it('renders component', () => {
      expect(getComponent().exists()).toEqual(true)
    })

    it('sets link to href', () => {
      expect(getComponent().props().href).toEqual('some-link')
    })

    it('sets style to the link', () => {
      props.style = { some: 'style' }
      expect(getComponent().props().style).toMatchObject({ some: 'style' })
    })
  })

  describe('given no link as props', () => {
    it('does not render the component', () => {
      expect(getComponent().html()).toBeNull()
    })
  })
})
