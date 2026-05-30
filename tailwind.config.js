/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "surface-tint": "#6a5b55",
        surface: "#fdf9f5",
        "on-error": "#ffffff",
        "on-surface-variant": "#4e4541",
        "primary-container": "#4e413b",
        "on-secondary-container": "#735e58",
        "primary-fixed-dim": "#d6c3ba",
        "secondary-container": "#f5dad1",
        "secondary-fixed-dim": "#dbc1b9",
        "secondary-fixed": "#f8ddd4",
        "on-primary-container": "#bfada5",
        "on-primary-fixed-variant": "#51443e",
        "on-tertiary-fixed-variant": "#52443f",
        tertiary: "#382b27",
        "surface-container-highest": "#e6e2de",
        "on-error-container": "#93000a",
        "inverse-on-surface": "#f4f0ec",
        "on-primary": "#ffffff",
        "surface-container": "#f1ede9",
        "on-secondary-fixed-variant": "#55433d",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#ebe7e4",
        "on-secondary-fixed": "#261813",
        "on-background": "#1c1c19",
        outline: "#807570",
        "tertiary-fixed-dim": "#d6c2bc",
        "on-tertiary": "#ffffff",
        error: "#ba1a1a",
        "on-tertiary-container": "#c1ada8",
        "on-tertiary-fixed": "#241916",
        primary: "#372b26",
        "outline-variant": "#d2c4be",
        background: "#fdf9f5",
        "on-secondary": "#ffffff",
        "on-primary-fixed": "#241914",
        "surface-container-low": "#f7f3ef",
        "on-surface": "#1c1c19",
        "primary-fixed": "#f3ded6",
        "surface-variant": "#e6e2de",
        secondary: "#6e5a53",
        "tertiary-container": "#4f413d",
        "surface-bright": "#fdf9f5",
        "error-container": "#ffdad6",
        "inverse-surface": "#31302e",
        "tertiary-fixed": "#f3ded8",
        "inverse-primary": "#d6c3ba",
        "surface-dim": "#ddd9d6"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      spacing: {
        "margin-mobile": "24px",
        "section-gap": "120px",
        gutter: "24px",
        "margin-desktop": "80px",
        unit: "8px",
        "container-max": "1200px"
      },
      maxWidth: {
        "container-max": "1200px"
      },
      fontFamily: {
        "headline-md": ["Cormorant Garamond", "serif"],
        "display-lg": ["Cormorant Garamond", "serif"],
        "headline-lg": ["Cormorant Garamond", "serif"],
        "label-sm": ["Manrope", "sans-serif"],
        "body-md": ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["32px", { lineHeight: "1.3", fontWeight: "400" }],
        "display-lg": ["64px", { lineHeight: "1.1", letterSpacing: "0", fontWeight: "300" }],
        "headline-lg": ["48px", { lineHeight: "1.2", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1.0", letterSpacing: "0.1em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "1.8", letterSpacing: "0.01em", fontWeight: "400" }],
        "headline-lg-mobile": ["32px", { lineHeight: "1.2", fontWeight: "400" }]
      }
    }
  },
  plugins: []
};
