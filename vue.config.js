const path = require("path");

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  // webpack config
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      // optimization for production environment
      let optimization = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                // get the name node_modules/packageName
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace("@", "")}`;
              }
            }
          }
        }
      };
      Object.assign(config, {
        optimization
      });
    } else {
      config.mode = "development";
    }
    Object.assign(config, {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src")
        }
      }
    });
  },
  productionSourceMap: false,
  // css config
  css: {
    extract: true,
    sourceMap: true,
    requireModuleExtension: true
  },
  // webpack-dev-server config
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 8022,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
