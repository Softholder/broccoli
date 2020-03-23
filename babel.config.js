module.exports = {
  // presets: ["@vue/cli-plugin-babel/preset"]
  presets: [
    "@vue/app",
    [
      "env", //添加 babel-preset-env 配置
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
