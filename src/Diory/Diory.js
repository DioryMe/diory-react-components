import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '../Text'
import { Image } from '../Image'
import { Link } from '../Link'

const Diory = ({onClick, children, ...diory}) => {
  const {text, image, link, style = {}} = diory
  const {image: imageStyle, text: textStyle, link: linkStyle, ...dioryStyle} = style
  return (
    <div
      style={dioryStyle}
      onClick={event => onClick && onClick({diory, event})}
    >
      <div style={{position: 'relative', height: '100%'}}>
        {image && <Image image={image} style={imageStyle}/>}
        {text && <Text text={text} style={textStyle} />}
        {link && <Link {...{link}} style={linkStyle}/>}
        {children}
      </div>
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
  children: PropTypes.node,
}

export default Diory
