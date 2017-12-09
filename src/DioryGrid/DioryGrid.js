import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import { Diory } from '../Diory'

const DioryGrid = ({ diorys = {}, styles = {}, children, onGridClick, onDioryClick, ...diory }) => (
  <Diory
    { ...withStyles(styles)(diory) }
    onClick={ onGridClick }
  >
    { children && safeGetChildren(children).map(childWithDiorysStyles(styles)) ||

      Object.entries(diorys).map(([key, childDiory]) => (
        <Diory
          { ...withStyles(styles, 'diorys')(childDiory) }
          key={ key }
          onClick={ props => onDioryClick({ key, ...props }) }
        />
      ))
    }
  </Diory>
)

const withStyles = (styles, key) => diory => deepmerge({ styles: getStyles(styles, key) }, diory)
const getStyles = ({ display, ...styles }, key) => key ?
  deepmerge(defaultStyles[display] && defaultStyles[display][key] || {}, styles[key] || {}) :
  deepmerge(defaultStyles[display] || {}, styles)

const safeGetChildren = children => Array.isArray(children) ? children : [children]
const childWithDiorysStyles = styles => (child, key) =>
  cloneElement(child, { key, ...withStyles(styles, 'diorys')(child.props) })

const defaultStyles = {
  flex: {
    diory: {
      display: 'flex',
      flexWrap: 'wrap',
      alignSelf: 'flex-start',
    },
    diorys: {
      diory: {
        height: '10em',
        width: '20em',
      }
    }
  }
}

DioryGrid.propTypes = {
  diorys: PropTypes.object,
  styles: PropTypes.object,
  children: PropTypes.node,
  onGridClick: PropTypes.func,
  onDioryClick: PropTypes.func
}

export default DioryGrid
