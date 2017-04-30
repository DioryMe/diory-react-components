import React from 'react'
import PropTypes from 'prop-types'

const defaultStyles = {
  position: 'relative',
  margin: '1em'
}

export const DioryText = ({ text }) => (
  <div style={ { ...defaultStyles } }>{ text }</div>
)

DioryText.propTypes = {
  text: PropTypes.string
}

DioryText.defaultProps = {
  text: ''
}
