# diory-react-components

> Create React components from Diograph data

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i diory-react-components --save
```

## Import

```js
import { Diory, DioryGrid, EventDiory } from 'diory-react-components'

```

## Usage

### Diograph data
```js
const diory = {
  text: 'Hello, I am a diory. Take me home!',
  image: 'https://gravatar.com/avatar/ff80f8f9bc52f1b79e468a41f2239001',
  link: 'http://tampere.fi',
  style: {
    width: '20em', height: '20em', backgroundColor: 'green', margin: '1em',
    text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center', textShadow: '1px 1px green' },
    image: { opacity: 0.6, filter: 'blur(5px)' }
  }
}
```
```js
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
```

### Diory components
#### Diory
```jsx
<Diory 
  { ...diory }
  onClick={ ({ diory, event}) => console.log(diory, event) }
/>
```

![Diory](https://raw.githubusercontent.com/DioryMe/diory-react-components/master/example/DioryExample.png)

#### DioryGrid
```jsx
<DioryGrid
  { ...dioryGrid }
  onGridClick={ ({ diory, event }) => console.log('grid:', diory, event) }
  onDioryClick={ ({ key, diory, event }) => { event.stopPropagation(); console.log('diory:', key, diory, event); } }
/>
```

![DioryGrid](https://raw.githubusercontent.com/DioryMe/diory-react-components/master/example/DioryGridExample.png)


#### EventDiory
```js
const eventDiory = {
  text: 'Weekend in Tampere',
  ...
  diorys: {
    startDate: ...
    endDate: ...
    description: ...
    images: ...
    places:...
    links: ...
    persons: ...
  }
}
```

```jsx
<EventDiory { ...eventDiory } />
```

![EventDiory](https://raw.githubusercontent.com/DioryMe/diory-react-components/master/example/EventDioryExample.png)


## Developing library in watch mode

Build, run lint and run unit tests in watch mode:

```sh
$ npm run build:watch
$ npm run test:watch
$ npm run lint:watch

```

## Running example

Run example in browser with hot loader:

```sh
$ npm start
```

Go to http://localhost:9010

## Changes

 - 1.2.0 (15.11.2017)
    - DioryGrid click callback names and props changed to onDioryClick({ key, diory, event }) and onGridClick({ diory, event )
 - 1.3.0 (9.12.2017)
    - Added EventDiory that uses DioryGrid in display flex mode
    - Renamed styles to style and moved diory styles to root level
    - Added link property to Diory
 - 1.4.0 (11.10.2019)
    - Changed diory structure to render only existing subcomponents
    - Separated internal styles from externals

## Author

[**Olli-Pekka Pohjola**](mailto:oopee@iki.fi)

## License

Copyright © 2019 Olli-Pekka Pohjola

Licensed under the MIT license.
