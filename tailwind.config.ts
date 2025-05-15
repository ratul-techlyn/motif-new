import type { Config } from "tailwindcss";
import { BACKGROUND_COLOR, BORDER_COLOR, COLORS, DIVIDE_COLOR } from "./theme/color";
import { FONT_SIZE, LETTER_SPACING, LINE_HEIGHT } from "./theme/font";
const { fontFamily } = require("tailwindcss/defaultTheme")


export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      colors: COLORS,
      backgroundColor: BACKGROUND_COLOR,
  		borderColor: BORDER_COLOR,
  		fontSize: FONT_SIZE,
  		lineHeight: LINE_HEIGHT,
  		letterSpacing: LETTER_SPACING,
      divideColor: DIVIDE_COLOR,
      fontFamily: {
        clash: ['var(--font-clash-display)', ...fontFamily.sans],
        helvetica: ['var(--font-helveticaNeue)', ...fontFamily.sans],
      },
      
      borderWidth: {
  			'1': '1px',
  			'3': '3px',
  			'5': '5px'
  		},
      screens:{
        'lp': '992px',   // laptop/desktop
        '3xl': '1920px', // Full HD screens
        '4xl': '2560px', // 2K screens
        '5xl': '3200px', // 3K screens
        '6xl': '3840px', // 4K screens
        '7xl': '5120px', // 5K screens
        '8xl': '7680px', // 8K screens
      },
      animation: {
        'slide-right': 'slide-right 10s linear infinite',
        'slide-left': 'slide-left 10s linear infinite',
        'slide': 'slide 20s linear infinite',
        'spin_slow':"spin 7s linear infinite"
      },
      keyframes: {
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide' : {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
          'cardBg': "url('/assets/test/image/bg.png')",
          'hoverCardBg': "url('/assets/test/image/shape.png')",
      },
      orangeAnimo: {
        500: "#FF5A00", 
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
