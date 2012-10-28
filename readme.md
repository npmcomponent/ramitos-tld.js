# tld.js

get the tld (top-level-domain) from a url

## installation

for [component](https://github.com/component/component):

    $ component install ramitos/tld.js

for [node.js](http://nodejs.org/):

    $ npm install tld.js

## download

 * without [component/url](https://github.com/component/url) embedded: [link](https://raw.github.com/ramitos/tld.js/master/dist/tld.js) *(7Kb minified, 3kb minified and gzipped)*
 * with [component/url](https://github.com/component/url) embedded: [link](https://raw.github.com/ramitos/tld.js/master/dist/tld.url.js) *(8Kb minified, 3kb minified and gzipped)*

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

## to be aware

The node.js url parser is different from the browser url parser. So, the browser has 2 cases where the parsing is not correct:

 * `scheme://user:pass@www.example.org:123/some/directory/file.html?query=string#fragment` should return `org` and returns nothing
 * `mailto:hello@example.org?subject=hello` should return `org` and returns nothing

This two cases are covered in the tests and fail in the browser tests


## test [![Build Status](https://secure.travis-ci.org/ramitos/tld.js.png)](http://travis-ci.org/ramitos/tld.js)

    $ make test

## credits
 
 * inspired by URI.js where the second-level-domain regular expression comes from there

## license

MIT