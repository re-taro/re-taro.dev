/**
 * @type {import('postcss-load-config').Config}
 */
const config = {
	// eslint-disable-next-line no-undef
	plugins: [require('@pandacss/dev/postcss')()],
};

// eslint-disable-next-line no-undef
module.exports = config;
