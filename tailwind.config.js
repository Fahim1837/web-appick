/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#245D51',
                secondary: '#CB8461',
                text: '#2C2C2C',
            }
        },
    },
    plugins: [],
}
