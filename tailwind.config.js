module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#91C3FD',
          'primary-focus': '#91C3FD',
          'primary-content': '#ffffff',
          'secondary': '#ffffff',
          'secondary-focus': '#ffffff',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#91C3FD',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#91C3FD',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}
