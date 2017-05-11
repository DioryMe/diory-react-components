import React from 'react'
import PropTypes from 'prop-types'
import { DioryText } from '../DioryText'
import { DioryImage } from '../DioryImage'

const defaultStyle = {
  position: 'relative'
}

const Diory = ({ image, text, styles }) => (
  <div style={{ ...defaultStyle, ...styles.diory }}>
    <DioryImage image={ image } styles={ styles } />
    <DioryText text={ text } styles={ styles } />
  </div>
)

Diory.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  styles: PropTypes.shape({
    diory: PropTypes.diory,
    image: PropTypes.object,
    text: PropTypes.object
  })
}

Diory.defaultProps = {
  styles: {}
}

export default Diory
