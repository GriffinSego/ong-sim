/* /ong-sim/tailwind.config.cjs#L1-11 */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{svelte,js,ts}'],
	theme: {
		extend: {
			fill: (theme) => theme('colors'),
			stroke: (theme) => theme('colors'),
		},
	},
	variants: {
		fill: ['hover'],
		stroke: ['hover'],
	},
	plugins: [],
};
