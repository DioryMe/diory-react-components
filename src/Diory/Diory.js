import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'
import { Image } from '../Image'
import { Link } from '../Link'

const defaultStyle = {
  position: 'relative'
}

const Diory = ({ onClick, children, ...diory }) => {
  const { style = {} } = diory
  const { image: imageStyle, text: textStyle, link: linkStyle, ...dioryStyle } = style
  return (
    <div
      style={{ ...defaultStyle, ...dioryStyle }}
      onClick={ event => onClick && onClick({ diory, event }) }
    >
      <Image { ...diory } style={ imageStyle } />
      <Text { ...diory } style={ textStyle } />
      <Link { ...diory } style={ linkStyle }/>
      { children }
    </div>
  )
}

Diory.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  style: PropTypes.shape({
    diory: PropTypes.object,
    image: PropTypes.object,
    text: PropTypes.object,
    link: PropTypes.object,
  }),
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default Diory
