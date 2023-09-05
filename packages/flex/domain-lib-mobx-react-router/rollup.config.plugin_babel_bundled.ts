/* eslint-disable no-console */
import rollupPluginBabel from '@rollup/plugin-babel'
import rollupPluginCommonjs from '@rollup/plugin-commonjs'
import rollupPluginResolve from '@rollup/plugin-node-resolve'
// import alias from '@rollup/plugin-alias'
import sourceMaps from 'rollup-plugin-sourcemaps'
// import rollupPluginTypescript from 'rollup-plugin-typescript2'
// import rollupPluginTypescript from '@rollup/plugin-typescript'
// import json from '@rollup/plugin-json
import type { RollupOptions } from 'rollup'
import { terser, type Options } from 'rollup-plugin-terser'
import path from 'path'
// import pkg from './package.json';

// const moduleName = pkg.name.replace(/^@.*\//, '');
// const inputFileName = 'src/main.ts';
// const author = pkg.author;
// const banner = `
//   /**
//    * @license
//    * author: ${author}
//    * ${moduleName}.js v${pkg.version}
//    * Released under the ${pkg.license} license.
//    */
// `;

const cwd = process.cwd()
if (process.env.DEBUG) {
  console.log('process.cwd() : ', cwd)
  console.log('FlexMobxReactRouter.ts : ', path.join(cwd, '../domain-app/src/FlexMobxReactRouter.ts'))
}

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const terserConfig = (minify: boolean): Options => {
  return minify
    ? {
      mangle: true,
      module: false,
      format: {
        beautify: false,
        comments: false,
        ecma: 2020,
      },
    } : {
      compress: {
        /* eslint-disable camelcase */
        dead_code: true,
      },
      format: {
        beautify: true,
        comments: true,
        ecma: 2020,
        indent_level: 2,
      },
      module: true,
      mangle: false,
    }
}

/** @type {import('rollup').RollupOptions} */
const option: RollupOptions = {
  // input: 'src/FlexMobxReactRouter.ts',
  input: path.join(cwd, '../domain-app/src/FlexMobxReactRouter.ts'),
  output: [
    // {
    //   file: 'dist/flex-mobx-react-router.js',
    //   format: 'umd',
    //   preferConst: true,
    //   sourcemap: true,
    //   name: 'FlexMobxReactRouter',
    //   globals: {
    //     history: 'HistoryLibrary',
    //     mobx: 'MobX',
    //     'react-router-dom': 'ReactRouterDOM',
    //     '@superwf/mobx-react-router': 'MobxReactRouter',
    //   },
    //   plugins: [terser(terserConfig(false))],
    // },
    // {
    //   file: 'dist/flex-mobx-react-router.min.js',
    //   format: 'umd',
    //   preferConst: true,
    //   sourcemap: true,
    //   name: 'FlexMobxReactRouter',
    //   globals: {
    //     history: 'HistoryLibrary',
    //     mobx: 'MobX',
    //     'react-router-dom': 'ReactRouterDOM',
    //     '@superwf/mobx-react-router': 'MobxReactRouter',
    //   },
    //   plugins: [terser(terserConfig(true))],
    // },
    {
      dir: 'lib',
      banner: '/* eslint-disable */',
      format: 'cjs',
      preferConst: true,
      sourcemap: true,
      plugins: [
        terser(terserConfig(false)),
        // getBabelOutputPlugin({
        //   // configFile: path.resolve(__dirname, '.babelrc_rollup_cjs.json'),
        //   // presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        //   // plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]]
        // })
      ]
    },
    {
      dir: 'module',
      banner: '/* eslint-disable */',
      format: 'module',
      preferConst: true,
      sourcemap: true,
      plugins: [
        terser(terserConfig(false)),
        // getBabelOutputPlugin({
        //   // configFile: path.resolve(__dirname, '.babelrc_rollup_cjs.json'),
        //   // presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        //   // plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]]
        // })
      ]
    },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    'history',
    'loglevel',
    'mobx',
    '@superwf/mobx-react-router',
    'universal-router',
    // 'path-to-regexp'
  ],

  plugins: [
    rollupPluginResolve({
      extensions,
      preferBuiltins: true,
    }),
    // rollupPluginTypescript(),
    rollupPluginCommonjs(),
    rollupPluginBabel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      extensions,
    }),
    // Resolve source maps to the original source
    sourceMaps(),
    // alias({
    //   entries: [
    //     { find: 'history', replacement: '../../node_modules/history' },
    //     { find: '@superwf/mobx-react-router', replacement: 'node_modules/@superwf/mobx-react-router' },
    //     { find: 'mobx', replacement: 'node_modules/mobx' },
    //     { find: 'react-router-dom', replacement: '../../react-router-dom' },
    //   ],
    // }),
  ],
}

export default option
