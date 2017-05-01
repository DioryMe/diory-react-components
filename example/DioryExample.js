import React from 'react'
import Diory, { DioryText } from '../lib'

const diorys = {
  diory: {
    text: 'Hello, I am a diory',
    image: 'http://www.mulierchile.com/images/landscape/landscape-4.jpg',
    styles: {
      diory: {
        position: 'relative',
        width: '40em',
        height: '20em',
        backgroundColor: 'black',
        overflow: 'hidden',
        margin: '2em'
      },
      image: { filter: 'blur(5px)' },
      text: { fontSize: '3em', fontFamily: 'sans-serif', color: 'white' }
    }
  },
  dioryText: {
    text: 'Hello, I am a diory text',
    styles: {
      text: {
        backgroundColor: 'green',
        fontSize: '3em',
        color: 'white'
      }
    }
  }
}

const DioryExample = ({}) => (
  <div>
    <Diory { ...diorys.diory } />
    <DioryText { ...diorys.dioryText } />
  </div>
)

export default DioryExample
