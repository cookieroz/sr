module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-object-rest-spread",
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
  ],
}
