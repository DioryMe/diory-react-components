import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'
import { Image } from '../Image'
import { Link } from '../Link'

const defaultStyle = {
  position: 'relative'
}

const Diory = ({ onClick, children, ...diory }) => {
  const { styles = {} } = diory;
  return (
    <div
      style={{ ...defaultStyle, ...styles.diory }}
      onClick={ event => onClick && onClick({ diory, event }) }
    >
      <Image image={ diory.image } style={ styles.image } />
      <Text text={ diory.text } style={ styles.text } />
      <Link link={ diory.link } style={ styles.link }/>
      { children }
    </div>
  )
}

Diory.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  styles: PropTypes.shape({
    diory: PropTypes.object,
    image: PropTypes.object,
    text: PropTypes.object
  }),
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default Diory
