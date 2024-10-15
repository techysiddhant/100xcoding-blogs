import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#a6d6b8', 600: '#007848', 900: '#003d22', 950: '#002c17' };
const gray = { 100: '#f5f6f7', 200: '#eceeef', 300: '#c0c2c4', 400: '#888c90', 500: '#54595c', 700: '#35393c', 800: '#24272a', 900: '#17181a' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};