/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import DioryGrid from './DioryGrid'

describe('<DioryGrid />', () => {
  let getComponent
  let diory

  beforeEach(() => {
    getComponent = () => shallow(<DioryGrid { ...diory } />)
  })

  describe('given a diory without connected diorys', () => {
    beforeEach(() => {
      diory = { some: 'diory-prop' }
    })

    it('passes diory props to the container Diory', () => {
      expect(getComponent().find('Diory').first().prop('some')).toEqual('diory-prop')
    })

    it('does not pass children as props to the container Diory', () => {
      expect(getComponent().find('Diory').first().prop('children').length).toEqual(0)
    })
  })

  describe('given a diory with connected diorys', () => {
    beforeEach(() => {
      diory = {
        diorys: { 1: { some: 'first-diory-prop' }, 2: { some: 'second-diory-prop' } }
      }
    })

    it('renders Diorys as children', () => {
      expect(getComponent().children().find('Diory').length).toEqual(2)
    })

    it('passes diorys props to Diorys', () => {
      expect(getComponent().children().find('Diory').first().prop('some')).toEqual('first-diory-prop')
    })

    describe('when the connected diorys is an empty object', () => {
      it('does not render diorys as children', () => {
        diory = {}
        expect(getComponent().children().find('Diory').length).toEqual(0)
      })
    })
  })

  describe('given a onParentClick callback', () => {
    let onParentClickMock
    beforeEach(() => {
      onParentClickMock = jest.fn()
      getComponent = () => shallow(<DioryGrid onParentClick={ onParentClickMock } />)
    })

    describe('when the parent diory is clicked', () => {
      beforeEach(() => {
        getComponent().simulate('click', { some: 'parent-diory' })
      })

      it('calls onParentClick callback', () => {
        expect(onParentClickMock).toHaveBeenCalledWith({ some: 'parent-diory' })
      })
    })
  })

  describe('given a onChildClick callback', () => {
    let onChildClickMock
    beforeEach(() => {
      diory = {
        diorys: { 'some-first-key': { some: 'first-child-diory' }, 'other-key': { some: 'second-child-diory' } }
      }
      onChildClickMock = jest.fn()
      getComponent = () => shallow(<DioryGrid { ...diory } onChildClick={ onChildClickMock } />)
    })

    describe('when the parent diory is clicked', () => {
      beforeEach(() => {
        getComponent().find({ some: 'first-child-diory' }).simulate('click', { some: 'callback' })
      })

      it('calls onParentClick callback', () => {
        expect(onChildClickMock).toHaveBeenCalledWith({ key: 'some-first-key', some: 'callback' })
      })
    })
  })
})
