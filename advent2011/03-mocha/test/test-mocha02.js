var assert = require('assert');

describe('mochaのテスト', function() {
  it('1秒待つこと', function(done) {
    setTimeout(function() {
      assert.ok(true);
      done();
    }, 1000);
  });
  it('1 + 1は2になること', function() {
    assert.equal(1 + 1, 2);
  });
});
