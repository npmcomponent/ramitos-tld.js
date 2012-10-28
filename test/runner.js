var urls = require('./urls.json'),
    parse = require('url').parse,
    tld = require('../src/tld'),
    colors = require('colors')
    assert = require('assert')
    
console.log('parsed'.bold)

urls.forEach(function (url, i) {
  var expected = url.tld
  var result = tld(parse(url.url))
  assert(result === expected)
  console.log('%s %s', '✓'.green.bold, url.url)
})

console.log('unparsed'.bold)

urls.forEach(function (url, i) {
  var expected = url.tld
  var result = tld(url.url)
  assert(result === expected)
  console.log('%s %s', '✓'.green.bold, url.url)
})