import React, { Component } from 'react'
import { Diory } from '../lib'
import DioryExample from './DioryExample'
import DioryGridExample from './DioryGridExample'
import EventDioryExample from './EventDioryExample'

class DioryExampleApp extends Component {
  constructor() {
    super();
    this.state = {
      example: 'diory-react-components',
      pickedDiory: {}
    }
  }

  render() {
    const { example, pickedDiory } = this.state

    return (
      <Diory style={ styles.container }>
        { example !== 'diory-react-components' &&
          <Diory
            text="< Back"
            style={ styles.back }
            onClick={() => this.setState(() => ({ example: 'diory-react-components' }))}
          />
        }
        <Diory
          text={ example + ' example' }
          style={ styles.title }
        />
        {
          example === 'diory-react-components' &&
          <div>
            <Diory
              text="Diory"
              style={ styles.list }
              onClick={() => this.setState(() => ({ example: 'Diory' }))}
            />
            <Diory
              text="DioryGrid"
              style={ styles.list }
              onClick={() => this.setState(() => ({ example: 'DioryGrid' }))}
            />
            <Diory
              text="EventDiory"
              style={ styles.list }
              onClick={() => this.setState(() => ({ example: 'EventDiory' }))}
            />
          </div>
        }
        { example === 'DioryGrid' &&
          <DioryGridExample/>
        }
        { example === 'Diory' &&
          <DioryExample/>
        }
        { example === 'EventDiory' &&
          <EventDioryExample/>
        }
      </Diory>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  back: {
    backgroundColor: 'green',
    cursor: 'pointer',
    borderBottom: '2px solid white',
    width: '100px',
    float: 'left',
    zIndex: '1',
    text: {
      fontWeight: 'bold',
      fontFamily: 'arial',
      color: 'white'
    }
  },
  title: {
    backgroundColor: 'green',
    borderBottom: '2px solid white',
    text: {
      fontWeight: 'bold',
      fontFamily: 'arial',
      color: 'white'
    }
  },
  list: {
    backgroundColor: 'grey',
    cursor: 'pointer',
    borderBottom: '2px solid white',
    text: {
      fontFamily: 'arial',
      color: 'white'
    }
  }
}

export default DioryExampleApp

