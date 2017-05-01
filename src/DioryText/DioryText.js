import React from 'react'
import PropTypes from 'prop-types'

const defaultStyles = {
  position: 'relative',
  margin: '1em'
}

export const DioryText = ({ text, style }) => !text ? null : (
  <div style={{ ...defaultStyles, ...style }}>{ text }</div>
)

DioryText.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
}

DioryText.defaultProps = {
  text: ''
}
