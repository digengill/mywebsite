/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      height: {
        "screen/70": "70vh",
        "screen/90": "90vh",
        "screen/10": "10vh",
        "screen/9": "9vh",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
