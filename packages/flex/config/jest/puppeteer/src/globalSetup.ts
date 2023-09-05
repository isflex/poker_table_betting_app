/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

import type { Config } from '@jest/types'

declare global {
  var __BROWSER_GLOBAL__: any
}

const { mkdir, writeFile } = require('node:fs').promises
const chalk = require('chalk')
// const fs = require('node:fs')
const os = require('node:os')
// const mkdirp = require('mkdirp')
const path = require('node:path')
const puppeteer = require('puppeteer')
const { setup: setupPuppeteer } = require('jest-environment-puppeteer')

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

/**
 * Sets up the environment for running tests with Jest
 */
module.exports = async function globalSetup(globalConfig: Config.GlobalConfig, projectConfig: Config.ProjectConfig) {
  // do stuff which needs to be done before all tests are executed
  console.log(chalk.green('Setup Global Puppeteer'))

  if (process.env.FLEX_MODE !== 'production') {
    console.log(`globalConfig : ${JSON.stringify(globalConfig)}`)
    console.log(`projectConfig : ${JSON.stringify(projectConfig)}`)
  }

  await setupPuppeteer(globalConfig)

  // const browser = await puppeteer.launch({})
  // // This global is not available inside tests but only in global teardown
  // global.__BROWSER_GLOBAL__ = browser
  // // Instead, we expose the connection details via file system to be used in tests
  // mkdirp.sync(DIR)
  // fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())

  if (process.env.CI === 'true') {
    console.log(`jest mode CI`)
  } else {
    console.log(`jest mode local`)
  }

  const browser = await puppeteer.launch({
    ...(process.env.CI === 'true'
      ? {
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
        headless: true,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-infobars',
          '--single-process',
          '--log-level=2',
          ...(process.env.FLEX_PROTOCOL === 'https://'
            ? [
              '--ignore-certificate-errors-spki-list',
              '--ignore-certificate-errors',
              '--ignore-ssl-errors'
            ] : []
          )
        ],
      } : {
        // executablePath: '/usr/bin/google-chrome',
        // executablePath: '/usr/bin/google-chrome-stable',
        // executablePath: '/usr/bin/chromium-browser',
        // devtools: true,
        dumpio: true,
        headless: false,
        slowMo: 100,
        args: [
          '--disable-dev-shm-usage',
          '--disable-infobars',
          '--disable-gpu',
          '--disable-software-rasterizer',
          '--remote-debugging-port=9222',
          '--log-level=2',
          ...(process.env.FLEX_PROTOCOL === 'https://'
            ? [
              '--ignore-certificate-errors-spki-list',
              '--ignore-certificate-errors',
              '--ignore-ssl-errors'
            ] : []
          )
        ],
      }
    ),
    ...(process.env.FLEX_PROTOCOL === 'https://' &&
      {
        ignoreHTTPSErrors: true,
        acceptInsecureCerts: true
      }
    )
  })

  // https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
  // const browser = process.env.FLEX_MODE === 'test-docker'
  //   ? await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  //   : await puppeteer.launch()

  // https://hub.docker.com/r/browserless/chrome
  // const browser = process.env.FLEX_MODE === 'test-docker'
  //   ? await puppeteer.connect({ browserWSEndpoint: 'ws://localhost:3000' })
  //   : await puppeteer.launch()

  // store the browser instance so we can teardown it later
  // this global is only available in the teardown but not in TestEnvironments
  global.__BROWSER_GLOBAL__ = browser

  // use the file system to expose the wsEndpoint for TestEnvironments
  await mkdir(DIR, { recursive: true })
  // console.log(`__BROWSER_GLOBAL__ wsEndpoint : ${browser.wsEndpoint()}`)
  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint())
}
