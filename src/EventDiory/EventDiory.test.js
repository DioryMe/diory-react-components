/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import EventDiory from './EventDiory'

describe('<EventDiory />', () => {
  let getComponent
  let diory

  beforeEach(() => {
    getComponent = () => shallow(<EventDiory { ...diory } />)
  })

  it('renders Diory with diory', () => {
    diory = { some: 'some' };
    expect(getComponent().props()).toMatchObject(diory);
  });

  it('missing tests', () => {

  });
})
