/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        strongcyan: "hsl(171, 66%, 44%)",
        lightblue: "hsl(233, 100%, 69%)",
        darkgrayishblue: "hsl(210, 10%, 33%)",
        grayishblue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        body: ["Bai Jamjuree"],
      },
    },
  },
  plugins: [],
};
