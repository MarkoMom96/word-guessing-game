/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				letterRender: 'letterRender 0.2s ease-out',
			},
			keyframes: {
				letterRender: {
					'0%': { transform: 'scale(0%)' },
					'85%': { transform: 'scale(120%)' },
					'100%': { transform: 'scale(100%)' },
				},
			},
		},
	},
	plugins: [],
}
