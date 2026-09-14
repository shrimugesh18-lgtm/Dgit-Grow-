/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F4F7F9',
          100: '#E6ECF1',
          200: '#C8D5E0',
          300: '#9FB5C8',
          700: '#23313C',
          800: '#1D2831',
          900: '#172027',
          DEFAULT: '#172027',
          deep: '#0F151A',
        },
        cyan: {
          light: '#EAFBFD',
          hover: '#15B5C5',
          DEFAULT: '#19C7D8',
          dark: '#1099A7',
        },
        surface: {
          light: '#F7FAFC',
          card: '#FFFFFF',
          muted: '#EDF2F7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'card': '18px',
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(23, 32, 39, 0.06), 0 4px 12px -2px rgba(23, 32, 39, 0.03)',
        'soft-lg': '0 20px 40px -10px rgba(23, 32, 39, 0.08), 0 8px 16px -4px rgba(23, 32, 39, 0.04)',
        'cyan-glow': '0 12px 25px -4px rgba(25, 199, 216, 0.35)',
        'card-hover': '0 22px 45px -8px rgba(23, 32, 39, 0.12)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.03)' },
        }
      }
    },
  },
  plugins: [],
}
