/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'tree': '#2B7A0B',
                'grass': '#5BB318',
                'highlight': '#7DCE13'
            }
        },
    },
    plugins: [],
}