/* eslint-disable no-console */

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const path = require('path')

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(path.join(__dirname, '../../../apps/poker/client'))
