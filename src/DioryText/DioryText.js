import React from 'react'
import PropTypes from 'prop-types'

const defaultStyles = {
  position: 'relative',
  padding: '1em'
}

export const DioryText = ({ text, styles: { text: style } }) => !text ? null : (
  <div style={{ ...defaultStyles, ...style }}>{ text }</div>
)

DioryText.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.object
}

DioryText.defaultProps = {
  text: '',
  styles: {}
}
