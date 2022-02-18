module.exports = {
  env: {
    browser: true,
    jasmine: true,
    mocha: true,
    jest: true,
    node: true,
    es6: true,
  },
  rules: {
    // 允许在 for 循环中使用 ++
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
  },
  extends: ["eslint-config-airbnb", "eslint-config-prettier"].map(
    require.resolve
  ),
  plugins: ["eslint-plugin-react"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
};
