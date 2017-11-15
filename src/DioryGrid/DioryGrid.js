import React from 'react'
import PropTypes from 'prop-types'
import { Diory } from '../Diory'

const DioryGrid = ({ diorys = {}, onGridClick, onDioryClick, ...diory }) => (
  <Diory
    { ...diory }
    onClick={ onGridClick }
  >
    { Object.entries(diorys).map(([key, diory]) => (
      <Diory
        { ...diory }
        key={ key }
        onClick={ props => onDioryClick({ key, ...props }) }
      />
    ))}
  </Diory>
)

DioryGrid.propTypes = {
  diorys: PropTypes.object,
  onGridClick: PropTypes.func,
  onDioryClick: PropTypes.func
}

export default DioryGrid
