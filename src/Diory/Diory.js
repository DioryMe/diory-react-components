import React from 'react'
import PropTypes from 'prop-types'

const Diory = ({ text }) => (
  <div>
    <div>{ text }</div>
  </div>
)

Diory.propTypes = {
  text: PropTypes.string
}

Diory.defaultProps = {
  text: ''
}

export default Diory
