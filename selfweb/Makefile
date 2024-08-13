
create:
	npm create vite@latest . -- --template react
tailwindcss:
	npm install -D tailwindcss postcss autoprefixer&&npx tailwindcss init -p
configtailwindcss:
	echo """
		@tailwind base;
		@tailwind components;
		@tailwind utilities;
	""" > ./src/inedx.css
.PHONY: build
build:
	echo nihao