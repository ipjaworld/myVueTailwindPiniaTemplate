/** @type {import('tailwindcss').Config} */
const colors = require('./public/asset/user-custom-style/colors.json');
const customStyles = require('./public/asset/user-custom-style/custom-styles.json');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: {
      ...colors,
      'account_lock': 'rgba(180, 24, 15, 0.18)'
    },
    textColor: {
      ...colors,
    },
    extend: {
      'roundedCorners' : customStyles.roundedCorners,
      backgroundBlendMode: {
        'multiply': 'multiply',
      },
      boxShadow : {
        market_tab: '1px 0px 2px rgba(0, 0, 0, 0.15), inset 4px 4px 4px 2px rgba(0, 0, 0, 0.08);',
        green_tab: '1px 0px 2px rgba(12, 84, 28, 0.35), inset 4px 4px 4px 2px rgba(31, 62, 38, 0.6);',
        red_tab: '1px 0px 2px rgba(151, 20, 13, 0.6), inset 4px 4px 4px 2px rgba(180, 24, 15, 0.68);',
        auth_tab: '1px 0px 2px 0px rgba(0, 0, 0, 0.35), inset 4px 4px 4px 2px rgba(0, 0, 0, 0.25);',
        blue_tab: '1px 0px 2px rgba(0, 76, 153, 0.6), inset 4px 4px 4px 2px rgba(0, 51, 102, 0.68);',
      },
      fontSize: {
        '11': '11px',
      },
      letterSpacing: {
        tightest: '-0.08em',
      },
      textColor: {
        'inherit' : 'inherit'
      },
      width: {
        'rank-calc' : 'calc(100% - 400px)'
      },
      lineHeight: {
        '50': '50px',
      }
    },
    screens: {
      smm: '328px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '4xl': '1800px',
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
    },
  },
  plugins: [],
}