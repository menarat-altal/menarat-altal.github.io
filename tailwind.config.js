/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bodyBg: "url(bodyBg.jpg)",
      },
    },
  },
  plugins: [],
};
