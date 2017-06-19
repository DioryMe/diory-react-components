import React from 'react'
import PropTypes from 'prop-types'
import { Diory } from '../Diory'

const DioryGrid = ({ diorys = {}, onParentClick, onChildClick, ...diory }) => (
  <Diory { ...diory } onClick={ onParentClick }>
    { Object.entries(diorys).map(([key, diory]) => <Diory key={ key } { ...diory } onClick={ onChildClick } />) }
  </Diory>
)

DioryGrid.propTypes = {
  diorys: PropTypes.object,
  onParentClick: PropTypes.func,
  onChildClick: PropTypes.func
}

export default DioryGrid
