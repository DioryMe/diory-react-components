import React from 'react'
import { Diory, DioryGrid } from '../lib'

const dioryGrid = {
  text: 'This is a grid',
  style: {
    backgroundColor: 'blue',
    fontFamily: 'arial',
    color: 'white',
    text: { fontSize: '2em', width: '100%' }
  },
  diorys: {
    someKey: {
      text: 'This diory is positioned to the top right corner of the grid',
      link: 'http://some.link',
      style: {
        position: 'absolute',
        top: 0,
        right: 0
      }
    },
    otherKey: {
      text: 'This text is white in a red background',
      style: {
        backgroundColor: 'red',
        width: '20em',
        height: '10em',
        text: {
          color: 'white'
        }
      }
    }
  }
}

const diory = {
  text: 'Hello, I am a diory. Take me home!',
  image: 'https://gravatar.com/avatar/ff80f8f9bc52f1b79e468a41f2239001',
  style: {
    flex: '1 0 20em', height: '20em', backgroundColor: 'green', margin: '1em',
    text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center', textShadow: '1px 1px green' },
    image: { opacity: 0.6, filter: 'blur(5px)' }
  }
}

const dioryFlexGrid = {
  text: 'Flex grid',
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
    6: diory,
    7: diory
  }
}

const DioryExample = ({}) => (
  <div>
    <DioryGrid
      { ...dioryGrid }
      onGridClick={ ({ diory }) => console.log('grid:', diory) }
      onDioryClick={ ({ diory, event }) => { event.stopPropagation(); console.log('diory:', diory); } }
    />
    <DioryGrid { ...dioryFlexGrid } />
  </div>
)

export default DioryExample
