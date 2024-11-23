import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#1c1917",
          "primary-content": "#cccbcb",
          "secondary": "#6d28d9",
          "secondary-content": "#ded8fb",
          "accent": "#06b6d4",
          "accent-content": "#000c10",
          "neutral": "#789dbc",
          "neutral-content": "#05090d",
          "base-100": "#fef9f2",
          "base-200": "#ddd9d2",
          "base-300": "#bdb9b4",
          "base-content": "#161514",
          "info": "#006bda",
          "info-content": "#d1e2fa",
          "success": "#16a34a",
          "success-content": "#000a02",
          "warning": "#f1b300",
          "warning-content": "#140c00",
          "error": "#be123c",
          "error-content": "#f8d5d6",
        },
        dark: {
          "primary": "#f3f4f6",
          "primary-content": "#1c1917",
          "secondary": "#6d28d9",
          "secondary-content": "#ded8fb",
          "accent": "#06b6d4",
          "accent-content": "#000c10",
          "neutral": "#1e3a8a",
          "neutral-content": "#cdd6e9",
          "base-100": "#1f2937",
          "base-200": "#19222e",
          "base-300": "#141c26",
          "base-content": "#cdd0d3",
          "info": "#006bda",
          "info-content": "#d1e2fa",
          "success": "#16a34a",
          "success-content": "#000a02",
          "warning": "#f1b300",
          "warning-content": "#140c00",
          "error": "#be123c",
          "error-content": "#f8d5d6",
        },
      },
    ],
  },
}