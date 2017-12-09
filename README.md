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
    display: 'inline-block', width: '20em', height: '20em', backgroundColor: 'green', margin: '1em',
    text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center', textShadow: '1px 1px green' },
    image: { opacity: 0.6, filter: 'blur(5px)' }
  }
}
```
```js
const dioryGrid = {
  text: 'This is a grid',
  image: 'https://gravatar.com/avatar/ff80f8f9bc52f1b79e468a41f2239001',
  style: {
    text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white' }
  },
  diorys: {
    someKey: {
      text: 'This is a diory',
      link: 'http://some.link',
    },
    otherKey: {
      text: 'This is a red diory with white text',
      style: {
        backgroundColor: 'red',
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
<div>
  <Diory 
    { ...diory }
    onClick={ ({ diory, event}) => doSomething(key,diory) }
  />
</div>
```

![Diory](https://raw.githubusercontent.com/DioryMe/diory-react-components/master/example/DioryExample.png)

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
<EventDiory { ...eventDiory }>
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

## Author

[**Olli-Pekka Pohjola**](mailto:oopee@iki.fi)

## License

Copyright © 2017 Olli-Pekka Pohjola
Licensed under the MIT license.