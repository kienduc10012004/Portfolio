/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f14',
        surface: '#11161d',
        surface2: '#161d27',
        line: '#232b36',
        ink: '#e6edf3',
        muted: '#7d8a9a',
        keyword: '#c297ff',   // purple – keywords
        func: '#5fd4e0',      // cyan – functions / links
        string: '#e3b341',    // amber – strings / tags
        comment: '#6a9955',   // green – comments / meta
        accent: '#ff8966',    // warm coral – CTAs, the one "loud" color
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -30px)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-25px, 25px)' },
        },
        riseIn: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        floatSlow: 'floatSlow 9s ease-in-out infinite',
        floatSlower: 'floatSlower 12s ease-in-out infinite',
        riseIn: 'riseIn 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
