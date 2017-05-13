import React from 'react'
import PropTypes from 'prop-types'

const defaultStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat'
}

const getBackgroundImage = image => ({ backgroundImage: 'url(' + image + ')' })

export const Image = ({ image, style = {} }) => !image ? null : (
  <div style={{ ...defaultStyle, ...getBackgroundImage(image), ...style }} />
)

Image.propTypes = {
  image: PropTypes.string,
  style: PropTypes.object
}
