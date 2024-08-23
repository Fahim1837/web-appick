/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                15: '3.75',  /* 60px */
                25: '6.25rem'  /* 100px */
            },
            colors: {
                primary: '#245D51',
                secondary: '#CB8461',
                text: {
                      0: '#F2E7DB',
                     50: '#808080',
                    100: '#2C2C2C',
                },
            },
        },
    },
    plugins: [],
}
