/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			width: {
				"40viewW": "40vw",
				"95viewW": "90vw",
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
