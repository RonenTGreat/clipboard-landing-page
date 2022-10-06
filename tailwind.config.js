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
      boxShadow: {
        cyanshadow:
          "0px 3px hsl(171deg 64% 33% / 79%), 3px 7px 49px -7px rgba(38,186,164,0.62)",
        blueshadow: "0px 3px hsl(233deg 65% 27% / 67%)",
      },
    },
  },
  plugins: [],
};
