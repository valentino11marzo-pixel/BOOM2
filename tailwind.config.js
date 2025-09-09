/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        bg:   '#0A0A0A',   // nero profondo
        gold: '#F5C542',   // oro più vivo
        navy: '#0B1F4B',   // CTA blu navy
        slate: { 900: '#0F172A' }
      },
      boxShadow: {
        soft: '0 6px 30px rgba(0,0,0,.25)',
        glow: '0 0 0 4px rgba(245,197,66,.15)'
      },
      borderRadius: { 'xl2': '1.25rem' }
    }
  },
  plugins: []
}
