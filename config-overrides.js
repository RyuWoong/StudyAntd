const { override, addWebpackAlias, addBabelPreset } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");
const path = require("path");

module.exports = override(
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          "primary-color": "#52c41a",
          "link-color": "#52c41a",
        },
        javascriptEnabled: true,
      },
    },
  }),
  addBabelPreset("@emotion/babel-preset-css-prop"),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
  })
);
