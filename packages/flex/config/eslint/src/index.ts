import { rules, internalRegex } from './partials/index.js'

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
    requireConfigFile: false,
    // EXPERIMENTAL_useSourceOfProjectReferenceRedirect: true,
    // project: 'tsconfig.eslint.settings.json',
    // tsconfigRootDir: './'
    // project: [
    //   'flex/**/tsconfig.build.json',
    //   'gateway/**/tsconfig.build.json',
    //   'mf-*/**/tsconfig.build.json'
    // ]
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
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mts'],
    },
    // https://github.com/alexgorbatchev/eslint-import-resolver-typescript
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        alwaysTryTypes: true,

        // project: {},
        project: [
          'packages/flex/**/tsconfig*.json',
          'packages/flytel/**/tsconfig*.json',
          'packages/gateway/**/tsconfig*.json',
          'packages/mf-*/**/tsconfig*.json'],
      },
    },
    'import/internal-regex': [
      ...internalRegex,
    ],
  },
}
