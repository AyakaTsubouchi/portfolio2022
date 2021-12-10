module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "hand-writing": ["Patrick Hand", "cursive"],
      },
      backgroundImage: {
        'postcard-front': "url('images/card_front_bg.png')",
        'postcard-back-one': "url('images/about_vancouver.jpeg')",
        'postcard-back-two': "url('images/about_two.jpeg')",
       }
    },
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "991px",
      // => @media (min-width: 991px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    // colors: {
    //   primary: "#5c6ac4",
    //   secondary: "#ecc94b",
    //   // ...
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
