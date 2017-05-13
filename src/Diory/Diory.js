import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'
import { Image } from '../Image'

const defaultStyle = {
  position: 'relative'
}

const Diory = ({ image, text, styles = {}, children }) => (
  <div style={{ ...defaultStyle, ...styles.diory }}>
    <Image image={ image } style={ styles.image } />
    <Text text={ text } style={ styles.text } />
    { children }
  </div>
)

Diory.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  styles: PropTypes.shape({
    diory: PropTypes.diory,
    image: PropTypes.object,
    text: PropTypes.object
  }),
  children: PropTypes.node
}

export default Diory
