/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        brand: '#7c3aed',
        ink: {
          DEFAULT: '#0a0a0a',
          trans: '#0a0a0add',
          soft: '#444444',
          muted: '#999999',
        },
        border: {
          DEFAULT: '#0a0a0a',
          light: '#e0e0e0',
        },
      },
      fontFamily: {
        display: ["'Anton'", 'Impact', 'sans-serif'],
        body: ["'Libre Baskerville'", 'Georgia', 'serif'],
        mono: ["'Inconsolata'", "'Courier New'", 'monospace'],
      },
      maxWidth: {
        site: '900px',
      },
      borderWidth: {
        site: '2px',
      },
    },
  },
  plugins: [],
};
