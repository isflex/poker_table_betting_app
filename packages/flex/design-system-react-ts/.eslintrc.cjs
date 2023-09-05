/* eslint-disable @typescript-eslint/no-var-requires */

// const path = require('path')

module.exports = {
  root: true,
  extends: [
    '@flexiness/eslint-config-flex'
  ],
  settings: {
    'import/resolver': {
      // webpack: {
      //   config: 'webpack.config.js'
      // },
      // typescript: {
      //   project: path.join(__dirname, 'tsconfig.json')
      // }
      typescript: {}
    },
  },
  ignorePatterns: ['Dockerfile', 'README.md', '*.yaml', 'node_modules/', 'build/', 'dist/', 'public/']
}
