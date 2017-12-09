import React from 'react'
import PropTypes from 'prop-types'

const defaultStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

export const Link = ({ link, style = {} }) => !link ? null : (
  <a href={ link } style={{ ...defaultStyle, ...style }} />
)

Link.propTypes = {
  link: PropTypes.string,
  style: PropTypes.object
}
