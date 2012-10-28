# tldjs

get the tld (top-level-domain) from a url

## installation

for [component](https://github.com/component/component):

    $ component install ramitos/tld.js

for [node.js](http://nodejs.org/):

    $ npm install tld.js

## usage

with string url:

```js
var tld = require('tld.js')

tld('http://www.example.co.uk') //=> co.uk
```

with parsed url:

```js
var tld = require('tld.js'),
    url = require('url')

tld(url.parse('http://www.example.co.uk')) //=> co.uk
```
## test [![Build Status](https://secure.travis-ci.org/ramitos/tld.js.png)](http://travis-ci.org/ramitos/tld.js)

    $ make test

## todo

 * test the component version

## credits
 
 * inspired by URI.js and the second-level-domain regular expression comes from there

## license

MIT