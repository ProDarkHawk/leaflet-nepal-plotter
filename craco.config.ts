declare var require: any;
declare var __dirname: any;
declare var module: any;
const path = require("path");
const {
  compilerOptions: { paths },
} = require("./tsconfig.json");

const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  webpack: {
    alias: Object.keys(paths).reduce(
      (all, alias) => ({
        ...all,
        [alias.replace("/*", "")]: path.resolve(
          __dirname,
          "src",
          paths[alias][0].replace("/*", "")
        ),
      }),
      {}
    ),
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
      }),
    ],
  },
  babel: {
    plugins: [
      [
        "babel-plugin-direct-import",
        {
          modules: ["@mui/material", "@mui/icons-material", "@mui/lab"],
        },
      ],
    ],
  },
};

export {};
