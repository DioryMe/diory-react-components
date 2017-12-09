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

  it('renders one child', () => {
    const component = shallow(
      <DioryGrid>
        <div className="some-child" />
      </DioryGrid>
    )
    expect(component.find('.some-child').exists()).toEqual(true)
  })

  it('renders several children', () => {
    const component = shallow(
      <DioryGrid>
        <div className="some-children" />
        <div className="some-children" />
      </DioryGrid>
    )
    expect(component.find('.some-children').length).toEqual(2)
  })

  it('renders container Diory', () => {
    diory = { some: 'diory-prop' }
    expect(getComponent().find('Diory').first().prop('some')).toEqual('diory-prop')
  })

  describe('given diorys', () => {
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

    it('does not render empty diorys as children', () => {
      diory = {}
      expect(getComponent().children().find('Diory').length).toEqual(0)
    })

    describe('given display flex style', () => {
      beforeEach(() => {
        diory.style = { display: 'flex' }
      })

      it('renders Diory with display flex', () => {
        expect(getComponent().props().style).toMatchObject({ display: 'flex' })
      })
    })
  })

  describe('given a onGridClick callback', () => {
    let onGridClickMock
    beforeEach(() => {
      onGridClickMock = jest.fn()
      getComponent = () => shallow(<DioryGrid onGridClick={ onGridClickMock } />)
    })

    describe('when the parent diory is clicked', () => {
      beforeEach(() => {
        getComponent().simulate('click', { some: 'parent-diory' })
      })

      it('calls onGridClick callback', () => {
        expect(onGridClickMock).toHaveBeenCalledWith({ some: 'parent-diory' })
      })
    })
  })

  describe('given a onDioryClick callback', () => {
    let onDioryClickMock
    beforeEach(() => {
      diory = {
        diorys: { 'some-first-key': { some: 'first-child-diory' }, 'other-key': { some: 'second-child-diory' } }
      }
      onDioryClickMock = jest.fn()
      getComponent = () => shallow(<DioryGrid { ...diory } onDioryClick={ onDioryClickMock } />)
    })

    describe('when the parent diory is clicked', () => {
      beforeEach(() => {
        getComponent().find({ some: 'first-child-diory' }).simulate('click', { some: 'callback' })
      })

      it('calls onGridClick callback', () => {
        expect(onDioryClickMock).toHaveBeenCalledWith({ key: 'some-first-key', some: 'callback' })
      })
    })
  })
})
