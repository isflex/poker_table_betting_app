module.exports = {
  root: true,
  extends: [
    '@flexiness/eslint-config-flex',
    'plugin:jest/recommended',
  ],
  plugins: [
    'jest'
  ],
  env: {
    jest: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: {}
      }
    },
  },
  ignorePatterns: ['Dockerfile', 'README.md', '*.yaml', 'cypress/', 'node_modules/', 'build/', 'dist/', 'public/']
}
