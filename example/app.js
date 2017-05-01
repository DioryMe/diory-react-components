import React from 'react'
import ReactDOM from 'react-dom'

import Diory from '../lib'

ReactDOM.render(
  <Diory
    text="Hello, I am a diory text"
    image="http://www.mulierchile.com/images/landscape/landscape-4.jpg"
    styles={{
      diory: { position: 'relative', width: '40em', height: '20em', backgroundColor: 'black', overflow: 'hidden', margin: '2em' },
      image: { filter: 'blur(5px)' },
      text: { fontSize: '3em', fontFamily: 'sans-serif', color: 'white' }
    }}
  />,
  document.getElementById('app')
)