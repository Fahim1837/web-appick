/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                15: '60px',
            },
            colors: {
                primary: '#245D51',
                secondary: '#CB8461',
                text: {
                    50: '#808080',
                    100: '#2C2C2C',
                },
            },
        },
    },
    plugins: [],
}
