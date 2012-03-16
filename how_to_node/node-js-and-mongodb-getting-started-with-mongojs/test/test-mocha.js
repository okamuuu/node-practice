var assert = require('assert');

describe('mochaのテスト', function() {

    var db;

    before(function(done) {

        var databaseUrl = "mydb";
        var collections = ["users", "reports"];
        db = require('mongojs').connect(databaseUrl, collections);
        db.users.remove();
        done();
    });

    it('save a male.', function(done) {
        db.users.save({
            email: "srirangan@gmail.com",
            password: "iLoveMongo",
            sex: "male"
        }, function(err, saved) {
            assert.ok(err === null);
            assert.ok(saved !== null);
            done();
        });
    });

    it('not found female.', function(done) {

        db.users.find({
            sex: "female"
        }, function(err, users) {
            assert.ok(err === null);
            assert.ok(users.length === 0);
            done();
        });
    });

    it('update.', function(done) {

        db.users.update({
            email: "srirangan@gmail.com"
        }, {
            $set: {
                sex: 'female',
                password: "iReallyLoveMongo"
            }
        }, function(err, updated) {
            assert.ok(err === null);
            assert.ok(updated === 1);
            done();

        });

    });

    it('found female.', function(done) {

        db.users.find({
            sex: "female"
        }, function(err, users) {
            assert.ok(err === null);
            assert.ok(users.length === 1);
            done();
        });
    });


});
