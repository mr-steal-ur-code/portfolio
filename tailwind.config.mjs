/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			gradientColorStops: {
				primaryGradient: ["rgb(15 25 40)", "rgb(30, 50, 80)"],
			},
			colors: {
				accent: {
					1: "rgb(130, 145, 120)",
					2: "rgb(120, 125, 200)",
				},
				bkg: "rgb(var(--color-bkg))",
				bkg2: "rgb(var(--color-bkg2))",
				bkg3: "rgb(15 25 40)",
				primary: "rgb(15, 20, 50)",
				content: "rgb(var(--color-content))",
				secondary: "rgb(255, 165, 0)",
				tertiary: "rgb(0, 120, 120)",
				glass: "rgba(0,0,0,.05)",
				success: "rgb(75, 160, 50)",
				danger: "rgb(200, 0, 50)",
				warning: "rgb(240, 210, 20)",
			},
		},
		screens: {
			xs: "100px",
			sm: "300px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
	darkMode: "class",
};
