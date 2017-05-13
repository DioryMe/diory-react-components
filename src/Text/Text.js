import React from 'react'
import PropTypes from 'prop-types'

const defaultStyles = {
  position: 'relative',
  padding: '1em'
}

export const Text = ({ text, style }) => !text ? null : (
  <div style={{ ...defaultStyles, ...style }}>{ text }</div>
)

Text.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object
}
