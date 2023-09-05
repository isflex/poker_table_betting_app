/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

import type { Config } from '@jest/types'

declare global {
  var __BROWSER_GLOBAL__: any
}

const fs = require('node:fs').promises
const chalk = require('chalk')
const rimraf = require('rimraf')
const os = require('node:os')
const path = require('node:path')
const { teardown: teardownPuppeteer } = require('jest-environment-puppeteer')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

module.exports = async function globalTeardown(globalConfig: Config.GlobalConfig) {
  // Your global teardown
  console.log(chalk.green('Teardown Global Puppeteer'))
  await teardownPuppeteer(globalConfig)

  await global.__BROWSER_GLOBAL__.close()
  rimraf.sync(DIR)

  // close the browser instance
  await global.__BROWSER_GLOBAL__.close()

  // clean-up the wsEndpoint file
  await fs.rm(DIR, {recursive: true, force: true})
}
