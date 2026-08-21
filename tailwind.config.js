/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B1F3A',
            hover: '#07172B',
            dark: '#051120',
            light: '#133059',
            subtle: '#EEF4FC',
          },
          blue: {
            DEFAULT: '#1D4ED8',
            hover: '#1E40AF',
            light: '#DBEAFE',
          },
          amber: {
            DEFAULT: '#F59E0B',
            hover: '#D97706',
            light: '#FEF3C7',
            subtle: '#FFFBEB',
          },
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          ink: '#111827',
          slate: '#64748B',
          border: '#E2E8F0',
          'border-dark': '#CBD5E1'
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 31, 58, 0.05), 0 1px 2px -1px rgba(11, 31, 58, 0.05)',
        'card': '0 4px 14px 0 rgba(11, 31, 58, 0.06), 0 2px 6px -1px rgba(11, 31, 58, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(11, 31, 58, 0.12), 0 4px 12px -2px rgba(11, 31, 58, 0.08)',
        'amber-glow': '0 0 20px -2px rgba(245, 158, 11, 0.35)',
      },
      borderRadius: {
        'academic': '10px',
        'academic-lg': '16px',
      }
    },
  },
  plugins: [],
}
