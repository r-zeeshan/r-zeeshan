import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

// v3 design system (light, soft, rounded). Tokens come from docs/design/blueprint/v3/v3.css and
// are documented in docs/design/blueprint/DESIGN.md.
export default {
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			colors: {
				paper: "var(--bg)",
				surface: "var(--surface)",
				sunk: "var(--sunk)",
				ink: {
					DEFAULT: "var(--ink)",
					2: "var(--ink-2)",
				},
				// Aliases kept so the inner pages that still use the older names pick up v3 values.
				muted: "var(--muted)",
				line: "var(--line)",
				"rule-dash": "var(--rule-dash)",
				// Buttons and progress only. Text in this family uses `accent-text`.
				accent: {
					DEFAULT: "var(--accent)",
					soft: "var(--accent-soft)",
					text: "var(--accent-text)",
				},
				good: {
					DEFAULT: "var(--good)",
					soft: "var(--good-soft)",
				},
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
				sans: ["'Work Sans'", "system-ui", "-apple-system", "'Helvetica Neue'", "Arial", "sans-serif"],
				// The home hero headline only.
				serif: ["Fraunces", "Georgia", "serif"],
				hand: ["Caveat", "cursive"],
				mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
			},
			borderRadius: {
				card: "24px",
				sunk: "20px",
				photo: "28px",
			},
			boxShadow: {
				card: "0 1px 2px rgba(22,41,77,.06), 0 16px 40px -16px rgba(22,41,77,.22)",
				"card-lg": "0 2px 4px rgba(22,41,77,.06), 0 32px 64px -24px rgba(22,41,77,.30)",
				btn: "0 1px 0 rgba(255,255,255,.4) inset, 0 8px 20px -8px rgba(255,138,101,.9)",
			},
			transitionTimingFunction: {
				ui: "cubic-bezier(0.23, 1, 0.32, 1)",
			},
			maxWidth: {
				// 1280px of content plus the 24px gutters.
				wrap: "1328px",
			},
		},
	},
	plugins: [
		// Every hover style is gated behind a real pointer.
		plugin(({ addVariant }) => {
			addVariant("hov", "@media (hover: hover) and (pointer: fine) { &:hover }");
			addVariant("group-hov", "@media (hover: hover) and (pointer: fine) { :merge(.group):hover & }");
		}),
	],
} satisfies Config;
