import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'
import { Image } from '../Image'

const defaultStyle = {
  position: 'relative'
}

const Diory = ({ image, text, styles = {}, onClick, children, ...other }) => (
  <div style={{ ...defaultStyle, ...styles.diory }} onClick={ handleOnClick({ text, image, styles, ...other }, onClick) }>
    <Image image={ image } style={ styles.image } />
    <Text text={ text } style={ styles.text } />
    { children }
  </div>
)

const handleOnClick = (diory, onClick) => event => onClick && onClick({ ...diory, data: { event } })

Diory.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  styles: PropTypes.shape({
    diory: PropTypes.diory,
    image: PropTypes.object,
    text: PropTypes.object
  }),
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default Diory
