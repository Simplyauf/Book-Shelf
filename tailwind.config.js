/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}", "./src/pages/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryColor_1: "hsl(231, 69%, 60%)",
                primaryColor_2: "hsl(0, 94%, 66%)",
                secondaryColor: "hsl(0,0%,100%)",
                neutralColor: "hsl(229, 8%, 60%)",
            },
            fontFamily: {
                Poppins: ["Poppins", "san- serif"],
            },
        },
    },
    plugins: [],
};
