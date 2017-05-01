import React from 'react'
import PropTypes from 'prop-types'
import { DioryText } from '../DioryText'
import { DioryImage } from '../DioryImage'

const Diory = ({ image, text, styles }) => (
  <div style={ styles.diory }>
    <DioryImage image={ image } style={ styles.image } />
    <DioryText text={ text } style={ styles.text } />
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
