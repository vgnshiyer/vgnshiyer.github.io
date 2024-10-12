import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
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
                '3/20': '15%',
                '4/20': '20%',
                '1/4': '25%',
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
