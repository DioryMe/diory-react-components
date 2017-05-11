# diory-react-components

> Create Diory React components from Diograph data

## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i diory-react-components --save
```

## Import

```js
import { Diory } from 'diory-react-components'
import { DioryImage } from 'diory-react-components'
import { DioryText } from 'diory-react-components'

```

## Usage

```js
const diory = {
  text: 'Hello, I am a diory. Take me home!',
  image: 'https://gravatar.com/avatar/ff80f8f9bc52f1b79e468a41f2239001',
  styles: {
    diory: { width: '20em', height: '20em', backgroundColor: 'green', margin: '5em auto' },
    image: { opacity: 0.6, filter: 'blur(5px)' },
    text: { fontSize: '2em', fontFamily: 'sans-serif', color: 'white', textAlign: 'center', textShadow: '1px 1px green' }
  }
}

```


```jsx
<div>
  <DioryImage { ...diory } />
  <DioryText { ...diory } />
  <Diory { ...diory } />
</div>
```

![alt text](https://github.com/DioryMe/diory-react-components/blob/master/example/diory-example.png)


## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](#please create an issue)

## Author

**Olli-Pekka Pohjola**

* [github/](https://github.com/)
* [twitter/](http://twitter.com/)

## License

Copyright © 2017 [Olli-Pekka Pohjola](#Olli-Pekka Pohjola)
Licensed under the ISC license.

***

_This file was generated by [readme-generator](https://github.com/jonschlinkert/readme-generator) on May 11, 2017._
