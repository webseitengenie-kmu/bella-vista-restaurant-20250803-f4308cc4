module.exports = {
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        accent: '#ffb347',
        neutral: '#f7f7f7',
        text: '#222222',
        background: '#ffffff'
      },
      fontFamily: {
        'primary': ['Inter, Helvetica Neue, Arial, sans-serif', 'sans-serif'],
        'secondary': ['Playfair Display, Times New Roman, serif', 'serif']
      }
    }
  },
  plugins: []
}