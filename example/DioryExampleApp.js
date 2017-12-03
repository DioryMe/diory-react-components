import React, { Component } from 'react'
import DioryGridExample from './DioryGridExample'
import DioryExample from './DioryExample'
import { Diory } from '../lib'

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
      <div>
        { example !== 'diory-react-components' &&
          <Diory
            text="< Back"
            styles={ styles.back }
            onClick={() => this.setState(() => ({ example: 'diory-react-components' }))}
          />
        }
        <Diory
          text={ example + ' example' }
          styles={ styles.title }
        />
        {
          example === 'diory-react-components' &&
          <div>
            <Diory
              text="DioryGrid"
              styles={ styles.list }
              onClick={() => this.setState(() => ({ example: 'DioryGrid' }))}
            />
            <Diory
              text="Diory"
              styles={ styles.list }
              onClick={() => this.setState(() => ({ example: 'Diory' }))}
            />
          </div>
        }
        { example === 'DioryGrid' &&
          <DioryGridExample/>
        }
        { example === 'Diory' &&
          <DioryExample/>
        }
      </div>
    )
  }
}

const styles = {
  back: {
    diory: {
      backgroundColor: 'green',
      cursor: 'pointer',
      borderBottom: '2px solid white',
      width: '100px',
      float: 'left',
      zIndex: '1'
    },
    text: {
      fontWeight: 'bold',
      fontFamily: 'arial',
      color: 'white'
    }
  },
  title: {
    diory: {
      backgroundColor: 'green',
      borderBottom: '2px solid white'
    },
    text: {
      fontWeight: 'bold',
      fontFamily: 'arial',
      color: 'white'
    }
  },
  list: {
    diory: {
      backgroundColor: 'grey',
      cursor: 'pointer',
      borderBottom: '2px solid white'
    },
    text: {
      fontFamily: 'arial',
      color: 'white'
    }
  }
}

export default DioryExampleApp

