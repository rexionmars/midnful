/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
    fontFamily: {
      'roboto': ['Roboto', 'system-ui'],
      'varela': ['"Varela Round"', 'system-ui'],
      'sacramento': ['"Marck Script"', 'system-ui'],
    },
    // colors: {
    //   'post': {
    //     400: '#252525',
    //     500: '#232323'
    //   },
    //   'violet': {
    //     50: '#f5f3ff',
    //     100: '#ede9fe',
    //     200: '#ddd6fe',
    //     300: '#c4b5fd'
    //   }
    // },
  },
  plugins: [],
}
