module.exports = {
  root: true,
  extends: [
    '@flexiness/eslint-config-flex',
    'plugin:i18n-json/recommended'
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: {}
      }
    },
  },
  rules: {
    'i18n-json/valid-message-syntax': [2, {
      syntax: 'icu',
    }],
    'i18n-json/valid-json': 2,
    'i18n-json/sorted-keys': [2, {
      order: 'asc',
      indentSpaces: 2,
    }],
    'i18n-json/identical-keys': 0,
  },
  ignorePatterns: ['Dockerfile', 'README.md', '*.yaml', 'node_modules/', 'build/', 'dist/', 'public/']
}
