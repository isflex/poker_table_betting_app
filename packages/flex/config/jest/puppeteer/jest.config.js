/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

/** @type {import('@jest/types').Config.InitialOptions} */

const { defaults } = require('jest-config')
const rootLocation = require.main.paths[0].split('node_modules')[0].slice(0, -1)
console.log('rootLocation : ', rootLocation)
// const mode = process.env.FLEX_MODE || 'development'
console.log('FLEX_MODE : ', process.env.FLEX_MODE)
// const { default: _env } = import(`${rootLocation}/.env.${mode}.js`)

module.exports = async () => {
  return {
    preset: 'jest-puppeteer',
    // rootDir: '../../../../..',
    rootDir: `${rootLocation}`,
    setupFiles: [`<rootDir>/.env.${process.env.FLEX_MODE}.js`],
    setupFilesAfterEnv: ['<rootDir>/packages/flex/config/jest/puppeteer/jest-setup.ts'],
    testPathIgnorePatterns: [
      ...defaults.testPathIgnorePatterns,
      '<rootDir>/node_modules/',
      '<rootDir>/.env(.*)test.js',
      '<rootDir>/packages/flex/config/jest/puppeteer/dist',
      '<rootDir>/packages/flex/config/cypress/',
      '<rootDir>/packages/flex/',
      '<rootDir>/packages/flytel/',
      '<rootDir>/packages/gateway/',
      '<rootDir>/packages/mf-developer-portfolio/',
      '<rootDir>/packages/slides/',
    ],
    transform: {
      '^.+\\.ts?$': [
        'ts-jest', {
          /* ts-jest config goes here in Jest */
          tsconfig: '<rootDir>/packages/flex/config/jest/puppeteer/tsconfig.json'
        }
      ]
    },
    globals: {
      // ..._env,
      __end_to_end_server_timeout__: 100000,
    },
    globalSetup: '<rootDir>/packages/flex/config/jest/puppeteer/src/globalSetup.ts',
    globalTeardown: '<rootDir>/packages/flex/config/jest/puppeteer/src/globalTeardown.ts',
    testEnvironment: `<rootDir>/packages/flex/config/jest/puppeteer/src/puppeteer_environment.js`,
    reporters: [ 'default', 'jest-junit' ],
    testTimeout: 30000
  }
}
