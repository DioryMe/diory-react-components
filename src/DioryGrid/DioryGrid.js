import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import { Diory } from '../Diory'

const DioryGrid = ({ diorys = {}, style = {}, children, onGridClick, onDioryClick, ...diory }) => (
  <Diory
    { ...withStyles(style)(diory) }
    onClick={ onGridClick }
  >
    { children && safeGetChildren(children).map(childWithDiorysStyles(style)) ||

      Object.entries(diorys).map(([key, childDiory]) => (
        <Diory
          { ...withStyles(style, 'diorys')(childDiory) }
          key={ key }
          onClick={ props => onDioryClick({ key, ...props }) }
        />
      ))
    }
  </Diory>
)

const withStyles = (style, key) => diory => deepmerge({ style: getStyles(style, key) }, diory)
const getStyles = ({ display, ...style }, key) => key ?
  deepmerge(defaultStyles[display] && defaultStyles[display][key] || {}, style[key] || {}) :
  deepmerge(defaultStyles[display] || {}, style)

const safeGetChildren = children => Array.isArray(children) ? children : [children]
const childWithDiorysStyles = style => (child, key) =>
  cloneElement(child, { key, ...withStyles(style, 'diorys')(child.props) })

const defaultStyles = {
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    diorys: {
      height: '10em',
      width: '20em',
    }
  }
}

DioryGrid.propTypes = {
  diorys: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.node,
  onGridClick: PropTypes.func,
  onDioryClick: PropTypes.func
}

export default DioryGrid
