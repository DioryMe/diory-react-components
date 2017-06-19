/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import DioryGrid from './DioryGrid'

describe('<DioryGrid />', () => {
  let component
  let diory

  describe('given a diory without connected diorys', () => {
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

  describe('given a diory with connected diorys', () => {
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

    describe('when the connected diorys is an empty object', () => {
      it('does not render diorys as children', () => {
        diory = {}
        component = shallow(<DioryGrid { ...diory } />)
        expect(component.children().find('Diory').length).toEqual(0)
      })
    })
  })

  describe('given a onParentClick callback', () => {
    let onParentClickMock
    describe('when the parent diory is clicked', () => {
      beforeEach(() => {
        onParentClickMock = jest.fn()
        component = shallow(<DioryGrid onParentClick={ onParentClickMock } />)
        component.simulate('click', { some: 'parent-diory' })
      })

      it('calls onParentClick callback', () => {
        expect(onParentClickMock).toHaveBeenCalledWith({ some: 'parent-diory' })
      })
    })
  })

  describe('given a onChildClick callback', () => {
    let onChildClickMock
    describe('when the parent diory is clicked', () => {
      beforeEach(() => {
        diory = {
          diorys: { 1: { some: 'first-child-diory' }, 2: { some: 'second-child-diory' } }
        }
        onChildClickMock = jest.fn()
        component = shallow(<DioryGrid { ...diory } onChildClick={ onChildClickMock } />)
        component.find({ some: 'first-child-diory' }).simulate('click', { some: 'callback' })
      })

      it('calls onParentClick callback', () => {
        expect(onChildClickMock).toHaveBeenCalledWith({ some: 'callback' })
      })
    })
  })
})
