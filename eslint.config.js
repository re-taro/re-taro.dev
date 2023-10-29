const { re_taro } = require("@re-taro/eslint-config");

module.exports = re_taro({
  parserOptions: {
    project: "./tsconfig.json",
  },
});
