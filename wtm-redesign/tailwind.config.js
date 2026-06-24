/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Industrial design tokens
        industrial: '#1A1A1A', // base dark grey
        midnight: '#0F0F0F',   // deep contrast sections
        stark: '#FFFFFF',      // architectural white (text)
        concrete: '#9E9E9E',   // muted structural elements
        maroon: '#5A1818',     // matte maroon industrial accent
        hairline: '#222222',   // 1px structural blueprint line
      },
      fontFamily: {
        // Stark, minimalist grotesk
        sans: ['Archivo', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      lineHeight: {
        structural: '1.1',
        header: '1.15',
      },
      maxWidth: {
        frame: '1600px',
      },
    },
  },
  plugins: [],
}
