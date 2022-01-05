module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-pri-100": "hsl(238, 40%, 52%)",
        "clr-pri-200": "hsl(358, 79%, 66%)",
        "clr-pri-300": "hsl(239, 57%, 85%)",
        "clr-pri-400": "hsl(357, 100%, 86%)",

        "clr-neutral-100": "hsl(0, 0%, 100%)",
        "clr-neutral-200": "hsl(211, 10%, 45%)",
        "clr-neutral-300": "hsl(223, 19%, 93%)",
        "clr-neutral-400": "hsl(228, 33%, 97%)",
        "clr-neutral-500": "hsl(212, 24%, 26%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      gridTemplateColumns: {
        card: "3rem repeat(3, 1fr) auto",
      },
      screens: {
        md: "45rem",
      },
    },
    plugins: [],
  },
};
