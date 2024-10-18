// .eslintrc.js or eslint.config.mjs
import globals from 'globals'

export default [
  {
    files: ['**/*.js', '**/*.jsx'], // Include .jsx files
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: 'babel-eslint', // Use Babel ESLint parser for JSX
    },
  },
]
