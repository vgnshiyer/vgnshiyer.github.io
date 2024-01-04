import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // 'dark': '#0E1017',
        // 'light': '#F5F5F5',
        // 'secondary': '#FFBD38',
        // 'dim': '#808080',
        // 'semi-dark': '#25282E',

        // -- dark mode --
        'dark': '#0E1017',
        'semi-dark': '#25282E',
        'contrast-dark': '#FFBD38',
        'tertiary-dark': '#94A3B8',

        // -- light mode --
        'light': '#FAFAFA',
        'semi-light': '#E9E9EA',
        'contrast-light': '#F8931F',
        'tertiary-light': '#25282E',
      },
      maxWidth: {
        '1/4': '2A%',
        '1/3': '33.333333%',
        '1/2': '50%',
        '2/3': '66.666667%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%',
        'full': '100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}
export default config
