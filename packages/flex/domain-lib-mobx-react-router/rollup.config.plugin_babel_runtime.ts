import rollupPluginBabel from '@rollup/plugin-babel'
// import rollupPluginBabel, { getBabelOutputPlugin } from '@rollup/plugin-babel'
import rollupPluginCommonjs from '@rollup/plugin-commonjs'
import rollupPluginResolve from '@rollup/plugin-node-resolve'
// import alias from '@rollup/plugin-alias'
import sourceMaps from 'rollup-plugin-sourcemaps'
// import typescript from 'rollup-plugin-typescript2'
import rollupPluginTypescript from '@rollup/plugin-typescript'
// import json from '@rollup/plugin-json'
import type { RollupOptions } from 'rollup'
import { terser, type Options } from 'rollup-plugin-terser'
import path from 'path'

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
  input: 'src/FlexMobxReactRouter.ts',
  // input: 'dist/FlexMobxReactRouter.js',
  output: [
    {
      file: 'lib/FlexMobxReactRouter.cjs',
      banner: '/* eslint-disable */',
      format: 'cjs',
      preferConst: true,
      sourcemap: true,
      plugins: [terser(terserConfig(false))]
    },
    // {
    //   file: 'lib/LoadComponent.js',
    //   banner: '/* eslint-disable */',
    //   format: 'cjs',
    //   preferConst: true,
    //   sourcemap: true,
    //   plugins: [
    //     terser(terserConfig(false)),
    //     getBabelOutputPlugin({
    //       configFile: path.resolve(__dirname, '.babelrc'),
    //     })
    //     // getBabelOutputPlugin({
    //     //   presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    //     //   plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]]
    //     // })
    //   ]
    // },
    {
      file: 'module/FlexMobxReactRouter.mjs',
      banner: '/* eslint-disable */',
      format: 'module',
      preferConst: true,
      sourcemap: true,
      plugins: [terser(terserConfig(false))],
    },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [
    'history',
    'loglevel',
    'mobx',
    'mobx-react-lite',
    'path-to-regexp',
    'react',
    'react-dom',
    'react-router-dom',
    '@superwf/mobx-react-router',
    'universal-router'
  ],

  // https://github.com/alexjoverm/typescript-library-starter/blob/master/rollup.config.ts
  // plugins: [
  //   // Allow json resolution
  //   json(),
  //   // Compile TypeScript files
  //   typescript({ useTsconfigDeclarationDir: true }),
  //   // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
  //   commonjs(),
  //   // Allow node_modules resolution, so you can use 'external' to control
  //   // which external modules to include in the bundle
  //   // https://github.com/rollup/rollup-plugin-node-resolve#usage
  //   nodeResolve(),

  //   // Resolve source maps to the original source
  //   sourceMaps(),
  // ],

  plugins: [
    // rollupPluginTypescript(),
    rollupPluginTypescript({ tsconfig: './tsconfig.prerollup_runtime.json' }),
    rollupPluginCommonjs({
      extensions,
    }),
    rollupPluginBabel({
      configFile: path.resolve(__dirname, '.babelrc_runtime.json'),
      babelHelpers: 'runtime',
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      // plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]],
      exclude: ['node_modules/**', 'dist/**', /core-js/],
      extensions,
      // extensions: ['.ts'],
      // include: path.resolve('src', '**', '*.ts')
    }),
    // Resolve source maps to the original source
    sourceMaps(),
    rollupPluginResolve({
      browser: true,
    })
  ],
}

export default option
