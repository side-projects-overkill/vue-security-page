import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:vue/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ),
  {
    languageOptions: {
      ecmaVersion: 15,
      sourceType: 'module',
    },

    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always',
          jsx: 'never',
          json: 'always',
        },
      ],
    },
  },
]
