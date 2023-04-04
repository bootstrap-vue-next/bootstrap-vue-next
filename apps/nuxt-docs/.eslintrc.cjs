/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

const {defineConfig} = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
  },
})
