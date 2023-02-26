/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				"40viewW": "40vw",
			},
			height: {
				"90viewH": "90vh",
			},
		},
		fontFamily: {
			sans: ["'Montserrat', sans-serif"],
		},
	},
	plugins: [],
};
