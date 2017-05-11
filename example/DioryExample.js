import React from 'react'
import { Diory, DioryImage, DioryText } from '../lib'

const diorys = {
  diory: {
    text: 'Hello, I am a diory. Take me home!',
    image: 'https://gravatar.com/avatar/ff80f8f9bc52f1b79e468a41f2239001',
    styles: {
      diory: { width: '20em', height: '20em', backgroundColor: 'green', margin: '5em auto' },
      text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center', textShadow: '1px 1px green' },
      image: { opacity: 0.6, filter: 'blur(5px)' }
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
    <DioryImage { ...diorys.diory } />
    <DioryText { ...diorys.diory } />
    <Diory { ...diorys.diory } />
  </div>
)

export default DioryExample
