/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'background': "url('/images/b.jpg')",
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
            },
        },
    },
    plugins: [],
}
