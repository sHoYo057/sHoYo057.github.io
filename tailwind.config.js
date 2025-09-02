module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#38BDF8', // sky
          DEFAULT: '#1E3A8A', // navy
          dark: '#1E293B', // slate
        },
      },
    },
  },
  plugins: [],
}
