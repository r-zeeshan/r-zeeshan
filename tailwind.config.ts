import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// Blueprint design system. Tokens come from docs/design/blueprint/DESIGN.md.
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		// Radius is 0 everywhere (DESIGN.md §4).
		borderRadius: {
			none: "0",
			sm: "0",
			DEFAULT: "0",
			md: "0",
			lg: "0",
			xl: "0",
			"2xl": "0",
			"3xl": "0",
			full: "0",
		},
		extend: {
			colors: {
				paper: "var(--bg)",
				grid: "var(--grid)",
				ink: {
					DEFAULT: "var(--ink)",
					2: "var(--ink-2)",
				},
				muted: "var(--muted)",
				"rule-dash": "var(--rule-dash)",
				surface: "var(--surface)",
				note: {
					DEFAULT: "var(--note)",
					bg: "var(--note-bg)",
					band: "var(--note-band)",
				},
				band: {
					DEFAULT: "var(--ink)",
					text: "var(--band-text)",
					muted: "var(--band-muted)",
					line: "var(--band-line)",
				},
			},
			fontFamily: {
				sans: ["'Work Sans'", "'Helvetica Neue'", "Arial", "sans-serif"],
				hand: ["Caveat", "cursive"],
				mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
			},
			transitionTimingFunction: {
				ui: "cubic-bezier(0.23, 1, 0.32, 1)",
			},
			maxWidth: {
				wrap: "1296px",
			},
		},
	},
	plugins: [
		// Every hover style is gated behind a real pointer (DESIGN.md §5).
		plugin(({ addVariant }) => {
			addVariant("hov", "@media (hover: hover) and (pointer: fine) { &:hover }");
			addVariant("group-hov", "@media (hover: hover) and (pointer: fine) { :merge(.group):hover & }");
		}),
	],
} satisfies Config;
