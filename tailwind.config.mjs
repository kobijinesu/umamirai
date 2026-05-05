/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        green: {
          900: '#0A4D3C',
          800: '#0D6B53',
          700: '#10896A',
        },
        gold: {
          400: '#D4AF37',
          300: '#E0C96A',
        },
      },
      fontFamily: {
        sans: [
          '"Hiragino Kaku Gothic ProN"',
          '"Hiragino Sans"',
          'Meiryo',
          'sans-serif',
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: theme('colors.gray.800'),
            h2: {
              color: theme('colors.green.900'),
              fontWeight: '700',
              borderBottom: `2px solid ${theme('colors.gold.400')}`,
              paddingBottom: theme('spacing.2'),
            },
            h3: {
              color: theme('colors.green.800'),
              fontWeight: '600',
            },
            a: {
              color: theme('colors.green.800'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.gold.400'),
              },
            },
            strong: {
              color: theme('colors.green.900'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
