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
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx", ".less");
  return config;
};
