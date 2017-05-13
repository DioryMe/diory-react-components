import React from 'react'
import PropTypes from 'prop-types'
import { Diory } from '../Diory'

const DioryGrid = ({ diorys = {}, ...diory }) => (
  <Diory { ...diory }>
    { Object.entries(diorys).map(([key, diory]) => <Diory key={ key } { ...diory } />) }
  </Diory>
)

DioryGrid.propTypes = {
  diorys: PropTypes.object
}

export default DioryGrid
