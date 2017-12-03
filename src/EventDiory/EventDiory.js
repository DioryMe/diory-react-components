import React from 'react'
import PropTypes from 'prop-types'
import { Diory } from '../Diory'

const EventDiory = ({ ...diory }) => (
  <Diory
    { ...diory }
  />
)

EventDiory.propTypes = {}

export default EventDiory
