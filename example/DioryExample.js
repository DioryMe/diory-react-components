import React from 'react'
import { Diory, DioryGrid } from '../lib'

const diory = {
  text: 'Hello, I am a diory. Take me home!',
  image: 'https://gravatar.com/avatar/ff80f8f9bc52f1b79e468a41f2239001',
  styles: {
    diory: { display: 'inline-block', width: '20em', height: '20em', backgroundColor: 'green', margin: '1em' },
    text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center', textShadow: '1px 1px green' },
    image: { opacity: 0.6, filter: 'blur(5px)' }
  }
}

const dioryGrid = {
  text: 'This is a grid:',
  styles: {
    text: { fontSize: '2em', fontFamily: 'sans-serif' }
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

const dioryFlexItem = { ...diory }
dioryFlexItem.styles.diory.flex = '1 0 20em'

const dioryFlexGrid = {
  image: 'https://gravatar.com/avatar/ff80f8f9bc52f1b79e468a41f2239001',
  styles: {
    diory: { display: 'flex', flexWrap: 'wrap' }
  },
  diorys: {
    1: diory,
    2: diory,
    3: diory,
    4: diory
  }
}

const DioryExample = ({}) => (
  <div>
    <Diory { ...diory } />
    <DioryGrid { ...dioryGrid } />
    <Diory text="This is a flex grid:" styles={{ text: { fontSize: '2em', fontFamily: 'sans-serif' }}} />
    <DioryGrid { ...dioryFlexGrid } />
  </div>
)

export default DioryExample
