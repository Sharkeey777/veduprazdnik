/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        milk: '#FBF8F3',
        cream: '#F3ECE1',
        champagne: '#EADDC7',
        sand: '#D8C3A2',
        gold: '#C29A54',
        'gold-deep': '#A57C38',
        graphite: '#2B2926',
        ink: '#151210',
        wine: '#7E2C3B',
        'wine-soft': '#9C4655',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(43, 41, 38, 0.35)',
        card: '0 30px 80px -40px rgba(21, 18, 16, 0.45)',
        glow: '0 0 0 1px rgba(194,154,84,0.25), 0 30px 70px -35px rgba(194,154,84,0.35)',
      },
      backgroundImage: {
        'gold-line': 'linear-gradient(90deg, transparent, #C29A54, transparent)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
