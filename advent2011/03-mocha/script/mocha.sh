mocha test/test-mocha*.js # default is dot
mocha --reporter spec test/test-mocha*.js
mocha --reporter tap test/test-mocha*.js
#mocha --reporter landing test/test-mocha*.js
#mocha --reporter list test/test-mocha*.js
#mocha --reporter progress test/test-mocha*.js
mocha --reporter json test/test-mocha*.js
mocha --reporter json-stream test/test-mocha*.js
mocha --reporter doc test/test-mocha*.js > doc/index.html


