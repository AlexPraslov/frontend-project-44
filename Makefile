.PHONY: install brain-games lint

install:
	npm ci

publish:
	npm publish --dry-run

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

lint:
	npx eslint .

prettier:
	npx prettier --write .