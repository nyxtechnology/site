module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: [
    'vue-a11y',
    'eslint-plugin-import-helpers'
  ],
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    'plugin:vue-a11y/base'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^vue/',
          '/^@vue/',
          'module',
          '/^@\//',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }  
}
