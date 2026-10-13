/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './404.html'],
    theme: {
        extend: {
            colors: {
                ink: { DEFAULT: '#0b0b0b', soft: '#171717' },
                paper: '#faf8f5'
            },
            fontFamily: {
                sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'Inter', 'sans-serif']
            },
            boxShadow: {
                card: '0 1px 2px rgba(0,0,0,.04), 0 16px 40px -20px rgba(0,0,0,.25)'
            }
        }
    },
    plugins: []
}
