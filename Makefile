.PHONY: install brain-games lint

install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-evens.js

lint:
	npx eslint .

prettier:
	npx prettier --write .