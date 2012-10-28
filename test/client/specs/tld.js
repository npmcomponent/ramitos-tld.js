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