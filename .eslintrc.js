module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warning",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warning",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "printWidth": 80,
        "semi": false
      }
    ]
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};