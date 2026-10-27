/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#0a0a0c',
          900: '#111215',
          850: '#16181d',
          800: '#1b1e24',
          700: '#272b34',
          600: '#383d49',
        },
        gold: {
          300: '#f0d999',
          400: '#e3c273',
          500: '#c5a059',
          600: '#ad8742',
          700: '#8e6c30',
        },
        steel: {
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
