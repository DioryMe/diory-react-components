import React from 'react'
import { Diory } from '../lib'

const diory = {
  text: 'Hello, I am a diory. Take me home!',
  image: 'https://gravatar.com/avatar/ff80f8f9bc52f1b79e468a41f2239001',
  link: 'http://tampere.fi',
  style: {
    display: 'inline-block', width: '20em', height: '20em', backgroundColor: 'green', margin: '1em',
    text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center', textShadow: '1px 1px green' },
    image: { opacity: 0.6, filter: 'blur(5px)' }
  }
}

const dioryGrid = {
  text: 'This is a grid:',
  image: 'https://gravatar.com/avatar/ff80f8f9bc52f1b79e468a41f2239001',
  style: {
    text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white' }
  },
  diorys: {
    1: diory,
    2: diory,
    3: diory,
    4: diory,
    5: diory,
    6: diory
  }
}

const dioryButton = {
  text: 'This is a button that returns the clicked diory!',
  style: {
    backgroundColor: 'green', width: '100%', cursor: 'pointer',
    text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center' }
  }
}

const DioryExample = ({}) => (
  <div>
    <Diory { ...diory } />
    <Diory { ...dioryButton } onClick={ console.log }/>
  </div>
)

export default DioryExample
