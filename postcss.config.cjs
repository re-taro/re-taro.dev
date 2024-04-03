/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: [require("@pandacss/dev/postcss")()],
};

module.exports = config;
