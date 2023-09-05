/* eslint-disable no-console */

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
// const path = require('path')

console.log(require.resolve('@pointingpoker-client'))
