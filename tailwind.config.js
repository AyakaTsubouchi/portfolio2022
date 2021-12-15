module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // "hand-writing": ["Patrick Hand", "cursive"],
        "hand-writing": ["Open Sans", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      backgroundImage: {
        "postcard-front": "url('images/card_front_bg.png')",
        "postcard-back-one": "url('images/about_vancouver.jpeg')",
        "postcard-back-two":
          "url('images/about_two.jpeg')",
      },
      background:{

      }
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }
      laptop: "991px",
      desktop: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};