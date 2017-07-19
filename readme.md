# flow-init [![Build Status](https://travis-ci.org/SaraVieira/flow-init.svg?branch=master)](https://travis-ci.org/SaraVieira/flow-init)

> Easily scaffhold flow in your application


## Install

```
$ npm install flow-init
```


## Usage

```js
const flowInit = require('flow-init');

flowInit('unicorns');
//=> 'unicorns & rainbows'
```


## API

### flowInit(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global flow-init
```

```
$ flow-init --help

  Usage
    flow-init [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ flow-init
    unicorns & rainbows
    $ flow-init ponies
    ponies & rainbows
```


## License

MIT © [Sara Vieira](http://iamsaravieira.com)
