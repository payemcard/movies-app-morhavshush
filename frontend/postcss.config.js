export default {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16, // Root font size
      propList: ["*"], // Convert all properties
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
