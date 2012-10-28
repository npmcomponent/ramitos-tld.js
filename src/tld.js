var parse = require('url').parse,
    sld = require('./sld')
    

module.exports = function (url) {
  if(typeof url === 'string') url = parse(url)
  if(!url.hostname) return ''
  var tld = url.hostname.match(/\.([a-zA-Z]*?)$/)
  var msdl = url.hostname.match(sld)
  if(msdl) return msdl[1]
  else if(tld) return tld[1]
  else return ''
}