module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: '#27AE60',
        },
        customBlue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        customGreen: {
          light: '#9cf6b1',
          DEFAULT: '#27AE60',
          dark: '#228b22',
        },
        customRed: {
          light: '#ff7f7f',
          DEFAULT: '#ff4c4c',
          dark: '#e60000',
        },
        customSilver: {
          light: '#FAFAFA',  // Example value, adjust as needed
          DEFAULT: '#F4F4F7',
          dark: '#A9A9A9',   // Example value, adjust as needed
        },
        Magenta: {
          400: '#4A3AFF',
          300: '#A59DFF',
          200: '#D2CEFF',
          100: '#E9E7FF',
        },
        Blue: {
          400: '#3A95FF',
          300: '#9DCAFF',
          200: '#CDE4FF',
          100: '#ECF5FF',
        },
        Green: {
          400: '#3EFF3A',
          300: '#9FFF9D',
          200: '#CEFFCD',
          100: '#ECFFEC',
        },
        Yellow: {
          400: '#FFEB3A',
          300: '#FFF69D',
          200: '#FFFACD',
          100: '#FFFDEC',
        },
        Red: {
          400: '#FF3A46',
          300: '#FF9DA3',
          200: '#FFCDDO',
          100: '#FFECED',
        }
        // Add more custom colors here
      },
      fontFamily: {
        rotunda: ['Rotunda', 'sans-serif'],
      },
      fontSize: {
        display1: ['78px', { lineHeight: '84px' }],
        display2: ['62px', { lineHeight: '76px' }],
        display3: ['44px', { lineHeight: '52px' }],
        display4: ['28px', { lineHeight: '40px' }],
        headingH1: ['42px', { lineHeight: '54px' }],
        headingH2: ['32px', { lineHeight: '48px' }],
        headingH3: ['24px', { lineHeight: '34px' }],
        headingH4: ['22px', { lineHeight: '28px' }],
        headingH5: ['18px', { lineHeight: '24px' }],
        headingH6: ['16px', { lineHeight: '22px' }],
        bodyLarge: ['18px', { lineHeight: '32px' }],
        bodyDefault: ['14px', { lineHeight: '26px' }],
        bodySmall: ['12px', { lineHeight: '22px' }],
        textSingle400: ['18px', { lineHeight: '20px' }],
        textSingle300: ['16px', { lineHeight: '18px' }],
        textSingle200: ['14px', { lineHeight: '16px' }],
        textSingle100: ['12px', { lineHeight: '14px' }],
        textBold: ['14px', { lineHeight: '26px', fontWeight: '700' }],
        textLink: ['14px', { lineHeight: '26px' }],
        bulletList: ['14px', { lineHeight: '26px' }],
        numberedList: ['14px', { lineHeight: '26px' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  variants: {},
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}
