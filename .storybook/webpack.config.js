const path = require("path");
const SRC_PATH = path.join(__dirname, "../src");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: [SRC_PATH],
    use: [
      {
        loader: "awesome-typescript-loader",
        options: {
          configFileName: "./tsconfig.json",
        },
      },
    ],
  });
  config.module.rules.push({
    test: [/\.less$/],
    include: [SRC_PATH],
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
      },
      {
        loader: "less-loader",
      },
      {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            enabled: false,
            // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
            // Try enabling it in your environment by switching the config to:
            // enabled: true,
            // progressive: true,
          },
          gifsicle: {
            interlaced: false,
          },
          optipng: {
            optimizationLevel: 7,
          },
          pngquant: {
            quality: "65-90",
            speed: 4,
          },
        },
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx", ".less", ".png");
  return config;
};
