var should = require('should');
var hoge = 'fuga';
var point = {
    x: 10,
    y: 20
};

hoge.should.equal('fuga');
point.should.have.property('x', 10);
point.should.have.property('y', 20);
point.should.not.have.property('z');
