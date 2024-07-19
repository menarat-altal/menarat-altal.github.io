/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        bodyBg: "url(/assets/bodyBg.jpg)",
      },
    },
  },
  plugins: [],
};
