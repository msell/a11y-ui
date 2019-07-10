const path = require("path");

module.exports = ({ config }) => {

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      require.resolve("ts-loader"),
      require.resolve("react-docgen-typescript-loader"),
    ],
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve("@storybook/addon-storysource/loader")],
    enforce: "pre",
  });

  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.alias = {
    "@Themes": path.resolve(__dirname, "../src/themes/"),
  }
  return config;
};
