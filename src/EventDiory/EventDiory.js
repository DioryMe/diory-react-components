import React from 'react'
import PropTypes from 'prop-types'
import deepmerge from 'deepmerge'
import { Diory, DioryGrid } from '../.'

const EventDiory = ({ diorys = {}, ...diory }) => (
  <Diory { ...withStyle(diory, 'diory') }>
    <DioryGrid { ...withStyle(getDiorysStyles(diory), 'diorys')} >
      <Diory { ...withStyle(diorys.startDate, 'date') } />
      <Diory { ...withStyle(diorys.endDate, 'date') } />
      <Diory { ...withStyle(diorys.description, 'description') } />
      <DioryGrid { ...withStyle(diorys.images, 'images') } />
      <Diory { ...withStyle(diorys.places, 'places') } />
      <DioryGrid { ...withStyle(diorys.links, 'links') } />
      <DioryGrid { ...withStyle(diorys.persons, 'persons') } />
    </DioryGrid>
  </Diory>
)

const withStyle = (diory, key) => deepmerge({ styles: styles[key] || {} }, diory || {})
const getDiorysStyles = ({ styles = {} }) => ({ styles: styles.diorys })

const styles = {
  diory: {
    diory: { height: '100%', overflow: 'hidden' },
    text: { fontSize: '4em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center' },
    image: { opacity: '0.9', filter: 'blur(10px)', transform: 'scale(1.05)' }
  },
  diorys: {
    display: 'flex'
  },
  date: {
    text: {
      fontFamily: 'arial',
      fontSize: '1.5em',
      fontWeight: 'bold',
      color: 'white',
    }
  },
  description: {
    text: {
      fontFamily: 'arial',
      fontSize: '1em',
      color: 'white',
    }
  },
  images: {
    display: 'flex',
    diory: {
      justifyContent: 'center',
      width: 'initial',
      height: 'initial'
    }
  },
  places: {
    text: {
      fontFamily: 'arial',
      fontSize: '2em',
      fontWeight: 'bold',
      color: 'white',
    }
  },
  links: {
    display: 'flex',
    diory: {
      height: 'initial'
    },
    diorys: {
      diory: {
        backgroundColor: 'green'
      },
      text: {
        fontFamily: 'arial',
        fontSize: '1em',
        fontWeight: 'bold',
        color: 'white',
      }
    }
  },
  persons: {
    display: 'flex',
    diory: {
      justifyContent: 'center',
      width: 'initial',
      height: 'initial'
    },
    diorys: {
      diory: {
        margin: '3em',
        width: '5em',
        height: '5em',
        flex: ''
      },
      text: {
        top: '100%',
        fontFamily: 'arial',
        fontWeight: 'bold',
        color: 'white',
      },
      image: {
        borderRadius: '50%',
      }
    }
  }
}

EventDiory.propTypes = {
  diorys: PropTypes.shape({
    startDate: PropTypes.object,
    endDate: PropTypes.object,
    images: PropTypes.object,
    description: PropTypes.object,
    places: PropTypes.object,
    links: PropTypes.object,
    persons: PropTypes.object,
  })
}

export default EventDiory
