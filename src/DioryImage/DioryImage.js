import React from 'react'
import PropTypes from 'prop-types'

const defaultStyles = {
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

export const DioryImage = ({ image }) => (
  <div style={ { ...defaultStyles, ...getBackgroundImage(image) } } />
)

DioryImage.propTypes = {
  image: PropTypes.string
}

DioryImage.defaultProps = {
  image: ''
}
