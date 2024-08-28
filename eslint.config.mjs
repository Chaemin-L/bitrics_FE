import globals from 'globals'
import reactPlugin from 'eslint-plugin-react'

import recommendPlugin from 'eslint-plugin-react/configs/recommended.js'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import ESImport from 'eslint-plugin-import'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import parser from '@typescript-eslint/parser'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  recommendPlugin,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
    plugins: {
      react: reactPlugin,
      import: ESImport,
      prettier: prettierPlugin,
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        myCustomGlobal: 'readonly',
      },
      parserOptions: { parser: parser, ecmaFeatures: { jsx: true } },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: true,
      },
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'off',
      'jsx-a11y/alt-text': 'off',
      'import/order': [
        'on',
        {
          groups: [
            [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
              'object',
              'type',
            ],
          ],
        },
      ],
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'off',
    },
  },
]
