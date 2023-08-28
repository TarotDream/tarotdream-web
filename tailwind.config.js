/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			primary: '#FE8A3D',
			control: '#EF8F50',
			secondary: '#16A34A',
			tertiary: '#FDE047',
			'black-600': '#606060',
			'gray-400': '#BDBDBD',
			'gray-200': '#E5E7EB',
			white: '#ffffff'
		},
		extend: {}
	},
	plugins: []
};
