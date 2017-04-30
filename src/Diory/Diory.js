import React from 'react'
import PropTypes from 'prop-types'
import { DioryText } from '../DioryText'

const Diory = ({ text }) => (
  <div>
    <DioryText text={ text } />
  </div>
)

Diory.propTypes = {
  text: PropTypes.string
}

export default Diory
