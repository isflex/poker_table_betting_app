import { register } from 'ts-node'

// const mode = 'bundled';
// // const mode = 'runtime';

// import tsconfig from `./tsconfig.rollup_${mode}.json`;

// register({
//   compilerOptions: tsconfig.compilerOptions
// });

// module.exports = require(`./rollup.config.plugin_babel_${mode}.ts`);

// ////////////////////////////////////////////////////////////////////

import tsconfig from './tsconfig.rollup_runtime.json'

// import tsconfig from './tsconfig.rollup_runtime.ts'
// import tsconfig from './tsconfig.build.json'

register({
  compilerOptions: tsconfig.compilerOptions
})

module.exports = require('./rollup.config.plugin_babel_runtime.ts')

// ////////////////////////////////////////////////////////////////////

// import tsconfig from './tsconfig.rollup_bundled.json';
// // import tsconfig from './tsconfig.rollup_bundled.ts';

// register({
//   compilerOptions: tsconfig.compilerOptions
// });

// module.exports = require('./rollup.config.plugin_babel_bundled.ts');
