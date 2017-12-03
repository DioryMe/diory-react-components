import React from 'react'
import { EventDiory } from '../lib'

const eventDiory = {
  text: 'This is event title',
  image: 'https://media1.britannica.com/eb-media/65/162465-004-9089A51F.jpg',
  styles: {
    diory: { height: '100%' },
    text: { fontSize: '4em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center' },
  }
}

const EventDioryExample = ({}) => (
  <EventDiory { ...eventDiory } />
)

export default EventDioryExample
