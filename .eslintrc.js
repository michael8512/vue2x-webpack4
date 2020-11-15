// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
    '@vue/prettier',
    'eslint:recommended',
    '@vue/typescript/recommended',
    // '@vue/prettier/@typescript-eslint'
  ],
  // required to lint *.vue files
  plugins: [
    '@typescript-eslint/parser'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  globals: {
    BMap: true,
    AMap: true
  },
  // add your custom rules here
  rules: {
    "eqeqeq": "error",
    "no-console": "warn",
    "semi": ["error"],
    "camelcase": "warn",
    "curly": "warn",
    "no-undef": "warn",
    "no-unused-vars": "warn"
  }
}
