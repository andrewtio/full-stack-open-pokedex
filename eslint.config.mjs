import globals from 'globals'

export default [
  {
    files: ['**/*.js', '**/*.jsx'], // Include .jsx files if you're using React
    languageOptions: {
      sourceType: 'module', // Use 'module' for ES module syntax
      globals: {
        ...globals.browser, // Use browser globals
        ...globals.node, // Optionally add Node globals if needed
      },
    },
  },
]
