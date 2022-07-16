/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ['./index.html','./script.js'],
  theme: {
    extend: {
      screens: {
        extraSmall: '425px',
      },
      colors: {
        background: '#171819',
        muted: '#C9CBCF',
        accent: '#66CCC1',
      },
      dropShadow: {
        'text-small': '1px 1px 0px rgba(0,0,0,0.90)',
        'text-medium': '1px 2px 0px rgba(0,0,0,0.90)',
        'text-large': '1px 4px 0px rgba(0,0,0,0.90)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          small: '2rem',
          large: '4rem',
          extraLarge: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        small: ["clamp(1.00rem,calc(0.92rem + 0.39vw),1.20rem)","1.4"],
        base: ["clamp(1.13rem,calc(0.98rem + 0.73vw),1.50rem)","1.5"],
        large: ["clamp(1.27rem,calc(1.03rem + 1.19vw),1.88rem)","1.4"],
        extraLarge: ["clamp(1.42rem,calc(1.06rem + 1.80vw),2.34rem)","1.4"],
        "2xl": ["clamp(1.60rem,calc(1.08rem + 2.59vw),2.93rem)","1.2"],
        "3xl": ["clamp(1.80rem,calc(1.08rem + 3.63vw),3.66rem)","1.1"],
        "4xl": ["clamp(2.03rem,calc(1.03rem + 4.98vw),4.58rem)","1"],
        "5xl": ["clamp(2.28rem,calc(0.94rem + 6.71vw),5.72rem)","1"],
        "6xl": ["clamp(2.57rem,calc(0.78rem + 8.95vw),7.15rem)","1"],
      },
    },
  },
  plugins: [
    plugin(({addUtilities,theme}) => {
      addUtilities({
        '.fade-up': {
          transition: 'transform 1s cubic-bezier(0.64,0.04,0.26,0.87),opacity 0.8s cubic-bezier(0.64,0.04,0.26,0.87)',
          opacity: theme('opacity.0'),
          transform: 'translate3d(0rem,2rem,0rem)',
        },
        '.faded': {
          opacity: theme('opacity.100'),
          transform: 'translate3d(0rem,0rem,0rem)',
        },
      });
    }),
  ],
};