module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#1B3654',
                'secondary': '#E5D2C4',
            },
            fontFamily: {
                'cookie': ['Cookie', 'cursive']
            }
        },
    },
    plugins: [],
}