*This repository is a mirror of the [component](http://component.io) module [ramitos/tld.js](http://github.com/ramitos/tld.js). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ramitos-tld.js`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# tld.js

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

## to be aware

The node.js url parser is different from the browser url parser. So, the browser has 2 cases where the parsing is not correct:

 * `scheme://user:pass@www.example.org:123/some/directory/file.html?query=string#fragment` should return `org` and returns nothing
 * `mailto:hello@example.org?subject=hello` should return `org` and returns nothing

This two cases are covered in the tests and fail in the browser tests


## test [![Build Status](https://secure.travis-ci.org/ramitos/tld.js.png)](http://travis-ci.org/ramitos/tld.js)

    $ npm test

## credits
 
 * inspired by [URI.js](https://github.com/medialize/URI.js/) where the second-level-domain regular expression comes from

## license

MIT