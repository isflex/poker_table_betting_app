module.exports = {
  root: true,
  extends: [
    '@flexiness/eslint-config-flex'
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: {}
      }
    },
  },
  ignorePatterns: ['Dockerfile', 'README.md', '*.yaml', 'node_modules/', 'build/', 'dist/', 'public/']
}
