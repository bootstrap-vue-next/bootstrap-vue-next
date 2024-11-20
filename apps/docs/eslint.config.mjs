import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/*.spec.*', 'src/**/*.test.*'],
  },
  skipFormatting,
  {
    rules: {
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      'no-alert': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'arrow-body-style': 'warn',
      'arrow-parens': 'warn',
      'eqeqeq': 'error',
      'generator-star-spacing': 'warn',
      'grouped-accessor-pairs': 'warn',
      'no-caller': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'warn',
      'no-eval': 'error',
      'no-extra-bind': 'warn',
      'no-implied-eval': 'error',
      'no-labels': 'warn',
      'no-lone-blocks': 'warn',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-return-await': 'warn',
      'no-template-curly-in-string': 'warn',
      'no-throw-literal': 'error',
      'no-undef-init': 'warn',
      'no-useless-call': 'warn',
      'no-useless-constructor': 'warn',
      'no-useless-rename': 'warn',
      'no-useless-return': 'warn',
      'no-var': 'error',
      'object-shorthand': 'warn',
      'prefer-const': 'warn',
      'prefer-destructuring': 'warn',
      'prefer-numeric-literals': 'warn',
      'prefer-rest-params': 'warn',
      'prefer-spread': 'warn',
      'prefer-template': 'warn',
      'require-atomic-updates': 'warn',
      'rest-spread-spacing': 'warn',
      'sort-imports': [
        'warn',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      'template-curly-spacing': 'warn',
      'yield-star-spacing': 'warn',
      'yoda': 'warn',
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/eqeqeq': 'error',
    },
  },
]
