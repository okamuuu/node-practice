#BASE_DIR=$(shell pwd)

test:
	@cd how_to_node/node-js-and-mongodb-getting-started-with-mongojs/ && \
		mocha --reporter spec

