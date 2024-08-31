/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gray': '#887972',
				'elevated-tan': '#f2dbb1',
				'tan': '#e1c289',
				'light-brown': '#a7793e',
				'maroon': '#6b4131',
				'mid-brown': '#856045'
			}
		},
	},
	plugins: [],
}
