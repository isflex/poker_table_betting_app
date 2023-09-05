// eslint-disable-next-line @typescript-eslint/no-var-requires
const { rules, internalRegex } = require('./dist/partials')

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  parser: '@typescript-eslint/parser',
  // parser: '@babel/eslint-parser',

  extends: [
    'eslint:recommended',

    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // 'plugin:prettier/recommended',
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false
  },

  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],

  ignorePatterns: [
    '**/Dockerfile',
    '**/README.md',
    '**/*.yaml',
    '**/node_modules/',
    '**/dist/',
    '**/build/',
    '**/public/',
    '**/.next/',
    '**/rollup*.config.js',
    '**/webpack*.config.js',
  ],

  rules: {
    ...rules,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/ignore': ['react', 'react-native'],
    // https://github.com/import-js/eslint-plugin-import
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mts', 'css'],
    },
    // https://github.com/alexgorbatchev/eslint-import-resolver-typescript
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.mts', 'css']
      },
      typescript: {
        alwaysTryTypes: true,

        // project: {},
        project: [
          'apps/**/tsconfig*.json',
          'packages/flex/**/tsconfig*.json',
          'packages/gateway/**/tsconfig*.json',
        ],
      },
    },
    'import/internal-regex': [
      ...internalRegex,
    ],
  },
}
