/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

const chalk = require('chalk')
const puppeteer = require('puppeteer')
const fs = require('node:fs')
// const { readFile } = require('node:fs').promises
const os = require('node:os')
const path = require('node:path')
const PuppeteerEnvironment = require('jest-environment-puppeteer')
// const NodeEnvironment = require('jest-environment-node').default

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup')

class CustomEnvironment extends PuppeteerEnvironment {
  async setup() {
    console.log(chalk.yellow('Setup Test Environment.'))
    await super.setup()
    // Your setup

    // get the wsEndpoint
    const wsEndpoint = fs.readFileSync(path.join(DIR, 'wsEndpoint'), 'utf8')
    // const wsEndpoint = await readFile(path.join(DIR, 'wsEndpoint'), 'utf8')
    if (!wsEndpoint) {
      throw new Error('wsEndpoint not found')
    }

    this.global.__BROWSER__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    })

    // connect to puppeteer
    this.global.__BROWSER_GLOBAL__ = await puppeteer.connect({
      browserWSEndpoint: wsEndpoint,
    })
  }

  async teardown() {
    // Your teardown
    console.log(chalk.yellow('Teardown Test Environment.'))
    await super.teardown()
  }

  getVmContext() {
    return super.getVmContext()
  }
}

module.exports = CustomEnvironment
