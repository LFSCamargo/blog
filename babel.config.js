module.exports = {
	presets: ['next/babel'],
	plugins: [['styled-components', { ssr: true }], 'inline-svg'],
	env: {
		test: {
			presets: ['next/babel'],
		},
	},
};
