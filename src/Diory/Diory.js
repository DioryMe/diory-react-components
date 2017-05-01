import React from 'react'
import PropTypes from 'prop-types'
import { DioryText } from '../DioryText'
import { DioryImage } from '../DioryImage'

const Diory = ({ image, text }) => (
  <div>
    <DioryImage image={ image } />
    <DioryText text={ text } />
  </div>
)

Diory.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string
}

export default Diory
