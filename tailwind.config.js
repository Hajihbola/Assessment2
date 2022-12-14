/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,tsx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			light: {
				turquoise: "#03ADD2",

				arsenic: "#323C47",

				red: "#F82929",
			},

			dark: {
				celeste: "#A9FFFF",

				lavender: "#ECEDFF",

				tulip: "#FC8585",
			},

			white: "#FFF",

			// periwinkle: "#C2CFE0",

			// "electric-blue": "#56687C",

			// "green-sheen": "#7ABEAB",
			transparent: "transparent",
		},
		extend: {},
		darkMode: ["class"],
	},
	plugins: [],
};
