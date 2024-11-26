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
        dark: {
          "primary": "#8c6bf1",
          "primary-content": "#070414",
          "secondary": "#e9be6a",
          "secondary-content": "#130d04",
          "accent": "#48e5a3",
          "accent-content": "#02120a",
          "neutral": "#262931",
          "neutral-content": "#cfd0d2",
          "base-100": "#182030",
          "base-200": "#131a28",
          "base-300": "#0f1521",
          "base-content": "#cbcdd2",
          "info": "#2563EB",
          "info-content": "#d2e2ff",
          "success": "#16A34A",
          "success-content": "#000a02",
          "warning": "#D97706",
          "warning-content": "#110500",
          "error": "#DC2626",
          "error-content": "#ffd9d4"
        },
        light: {
          "primary": "#7084da",
          "primary-content": "#040611",
          "secondary": "#da8770",
          "secondary-content": "#110604",
          "accent": "#8ce399",
          "accent-content": "#071208",
          "neutral": "#262931",
          "neutral-content": "#cfd0d2",
          "base-100": "#ebf7f5",
          "base-200": "#ccd7d5",
          "base-300": "#aeb7b6",
          "base-content": "#131515",
          "info": "#2563EB",
          "info-content": "#d2e2ff",
          "success": "#16A34A",
          "success-content": "#000a02",
          "warning": "#D97706",
          "warning-content": "#110500",
          "error": "#DC2626",
          "error-content": "#ffd9d4"
        },
      },
    ],
  },
}