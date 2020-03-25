module.exports = {
  presets: [
    "@vue/app",
    [
      //add babel-preset-env config
      "@babel/preset-env",
      {
        modules: false
      }
    ]
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
