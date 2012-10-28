assert = chai.assert;

suite('parsed');

urls.forEach(function (url, i) {
  test(url.url, function () {
    var expected = url.tld
    var result = tld(parse(url.url))
    assert(result === expected)
  });
});

suite('unparsed');

urls.forEach(function (url, i) {
  test(url.url, function () {
    var expected = url.tld
    var result = tld(url.url)
    assert(result === expected)
  });
});

var parse = function(url){
  var a = document.createElement('a');
  a.href = url;
  return {
    href: a.href,
    host: a.host || location.host,
    port: a.port || location.port,
    hash: a.hash,
    hostname: a.hostname || location.hostname,
    pathname: a.pathname,
    protocol: !a.protocol || ':' == a.protocol ? location.protocol : a.protocol,
    search: a.search,
    query: a.search.slice(1)
  };
};