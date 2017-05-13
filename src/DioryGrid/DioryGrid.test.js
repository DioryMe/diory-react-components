/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import DioryGrid from './DioryGrid'

describe('<DioryGrid />', () => {
  let component
  let diory

  describe('given a diory without diorys', () => {
    beforeEach(() => {
      diory = { some: 'diory-prop' }
    })

    it('passes diory props to the container Diory', () => {
      component = shallow(<DioryGrid { ...diory } />)
      expect(component.find('Diory').first().prop('some')).toEqual('diory-prop')
    })

    it('does not pass children as props to the container Diory', () => {
      component = shallow(<DioryGrid { ...diory } />)
      expect(component.find('Diory').first().prop('children').length).toEqual(0)
    })
  })

  describe('given a diory with diorys object', () => {
    beforeEach(() => {
      diory = {
        diorys: { 1: { some: 'first-diory-prop' }, 2: { some: 'second-diory-prop' } }
      }
    })

    it('renders Diorys as children', () => {
      component = shallow(<DioryGrid { ...diory } />)
      expect(component.children().find('Diory').length).toEqual(2)
    })

    it('passes diorys props to Diorys', () => {
      component = shallow(<DioryGrid { ...diory } />)
      expect(component.children().find('Diory').first().prop('some')).toEqual('first-diory-prop')
    })

    describe('when the diorys object is empty', () => {
      it('does not render diorys as children', () => {
        diory = {}
        component = shallow(<DioryGrid { ...diory } />)
        expect(component.children().find('Diory').length).toEqual(0)
      })
    })
  })
})
