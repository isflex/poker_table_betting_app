/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-len */
/* eslint-disable no-console */

// __dirname is not defined in ES module scope
// import * as path from 'path'
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// // require.resolve for ES modules
// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)

// import { resolve } from 'import-meta-resolve'

const path = require('path')
const webpack = require('webpack')
// import webpack from 'webpack'
// const childProcess = require('child_process')
// const { ModuleFederationPlugin } = require('webpack').container
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
// import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'/'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'
const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'
// const shouldMinify = Boolean(process.env.MINIFY)

const rootLocation = '../../..'
// const rootLocation = require.main.paths[0].split('node_modules')[0].slice(0, -1)
// const findWorkspaceRoot = require('find-yarn-workspace-root')
// const workspacePath = findWorkspaceRoot(__dirname)
// const rootLocation = path.relative(__dirname, workspacePath)
console.log('rootLocation : ', rootLocation)

// const depsMonorepo = require(`${rootLocation}/package.json`).dependencies
// const deps = require('./package.json').dependencies

module.exports = {

  experiments: {
    // asyncWebAssembly: true,
    // buildHttp: true,
    // layers: true,
    // lazyCompilation: true,
    outputModule: true,
    // syncWebAssembly: true,
    topLevelAwait: true,
  },

  // entry: {
  //   [`mainEntry_${`flex_tailwind`}`]: [
  //     require.resolve('regenerator-runtime/runtime.js'),
  //     path.resolve(__dirname, './src/js/tailwind.tsx')
  //   ],
  // },

  entry: {
    tailwind: [
      path.resolve(__dirname, './dist/styles/globals.css')
    ],
  },

  context: __dirname, // to automatically find tsconfig.json

  mode: mode,

  // devtool: 'hidden-source-map',
  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'auto',
    crossOriginLoading: 'anonymous',
    clean: true,
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  },

  optimization: {
    // // default production
    // moduleIds: 'deterministic',
    // chunkIds: 'deterministic',
    // default development
    // moduleIds: 'named',
    // chunkIds: 'named',

    /*
      https://github.com/waldronmatt/dynamic-host-module-federation/blob/main/webpack.common.js

      disable webpack base config `runtimeChunck: single`
      https://github.com/webpack/webpack/issues/11691

      This can be removed when #11843 is merged
      https://github.com/webpack/webpack/pull/11843
    */
    runtimeChunk: false,

    ...(mode === 'production' ? {
      // splitChunks: {
      //   cacheGroups: {
      //     vendor: {
      //       test: /[\\/]node_modules[\\/](react-dom|mobx|reactstrap|lodash)[\\/]/,
      //       name: 'vendors',
      //       chunks: 'all',
      //     },
      //   },
      // },

      // https://stackoverflow.com/questions/48985780/webpack-4-create-vendor-chunk
      // splitChunks: {
      //   chunks: 'all',
      //   maxInitialRequests: Infinity,
      //   minSize: 0,
      //   cacheGroups: {
      //     vendorReact: {
      //       test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom)[\\/]/,
      //       name: 'vendor-react'
      //     },
      //     vendorStore: {
      //       test: /[\\/]node_modules[\\/](mobx|mobx-react-lite)[\\/]/,
      //       name: 'vendor-store'
      //     },
      //     vendorUtility: {
      //       test: /[\\/]node_modules[\\/](lodash|moment|moment-timezone)[\\/]/,
      //       name: 'vendor-utility'
      //     },
      //     vendorBootstrap: {
      //       test: /[\\/]node_modules[\\/](react-bootstrap|reactstrap)[\\/]/,
      //       name: 'vendor-bootstrap'
      //     },
      //     vendor: {
      //       test: /[\\/]node_modules[\\/](!react)(!react-dom)(!react-router)(!react-router-dom)(!mobx)(!mobx-react-lite)(!lodash)(!moment)(!moment-timezone)(!react-bootstrap)(!reactstrap)[\\/]/,
      //       name: 'vendor'
      //     },
      //   },
      // },

      /*
        https://github.com/waldronmatt/dynamic-host-module-federation/blob/main/webpack.prod.js

        SplitChunks finds modules which are shared between chunks and splits them
        into separate chunks to reduce duplication or separate vendor modules from application modules.
      */
      // splitChunks: {
      //   /*
      //     cacheGroups tells SplitChunksPlugin to create chunks based on some conditions
      //   */
      //   cacheGroups: {
      //     // vendor chunk
      //     vendor: {
      //       // name of the chunk - make sure name is unqiue to avoid namespace collisions with federated remotes
      //       name: `Vendors_${process.env.FLEX_APP_NAME}`,
      //       /* 
      //         we need to async this chunck because EVERYTHING is dynamically imported 
      //         due to how Module Federation works
      //       */
      //       chunks: 'async',
      //       // import file path containing node_modules
      //       test: /node_modules/,
      //       /*
      //         The higher priority will determine where a module is placed
      //         if it meets multiple conditions (both a shared and npm (vendor) module
      //         Prioritize vendor chuncks over commons
      //       */
      //       priority: 20,
      //     },
      //     common: {
      //       // create a commons chunk, which includes all code shared between entry points
      //       name: `Common_${process.env.FLEX_APP_NAME}`,
      //       // minimum number of chunks that must share a module before splitting
      //       minChunks: 2,
      //       // async + async chunks
      //       chunks: 'async',
      //       // lower priority than vendors
      //       priority: 10,
      //       /*
      //         If the current chunk contains modules already split out from the main bundle,
      //         it will be reused instead of a new one being generated.
      //       */
      //       reuseExistingChunk: true,
      //       /*
      //         Enforce value is set to true to force SplitChunksPlugin to
      //         form this chunk irrespective of the size of the chunk
      //       */
      //       enforce: true,
      //     },
      //   },
      // },
    } : {}),
  },

  // https://webpack.js.org/configuration/cache/#gitlab-cicd
  cache: {
    type: 'filesystem',
  },

  target: 'web',

  resolve: {
    extensions: [
      '*',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
      '.json',
      '.yaml',
      '.css'
    ],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.build.json'),
      })
    ],

    // fallback: {
    //   'buffer': require.resolve('buffer'),
    //   'crypto': require.resolve('crypto-browserify'),
    //   'stream': require.resolve('stream-browserify')
    // },

    alias: {
      // /!\ Aliases are now defined by typescript paths thru TsconfigPathsPlugin
      // react: path.resolve(`${rootLocation}/node_modules/react`),
      // 'react-router-dom': path.resolve(`${rootLocation}/node_modules/react-router-dom`),
    },
  },

  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: require.resolve('bundle-loader'),
        options: {
          lazy: true,
          presets: ['@babel/preset-typescript'],
        },
      },

      {
        test: /\.(tsx|ts|jsx|js)?$/,
        loader: require.resolve('ts-loader'),
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.build.json'),
          projectReferences: true,
          transpileOnly: true
        },
      },

      // ///////////////////////////////////////////////////////

      // {
      //   test: /\.module\.css$/i,
      //   include: path.resolve(__dirname, 'src/styles'),
      //   use: [
      //     {
      //       loader: require.resolve('style-loader'),
      //       options: {
      //         attributes: {
      //           nonce: '---CSP_NONCE---',
      //           'data-target': 'flex-css',
      //         },
      //       },
      //     },
      //     {
      //       loader: require.resolve('css-loader'),
      //       options: {
      //         esModule: true,
      //         sourceMap: mode === 'development',
      //         importLoaders: 1,
      //         modules: {
      //           exportLocalsConvention: 'camelCase',
      //           localIdentName: '[local]__[hash:base64:5]'
      //         },
      //       },
      //     },
      //     require.resolve('postcss-loader'),
      //   ],
      // },

      // {
      //   test: /\.css$/i,
      //   exclude: /\.module\.css$/,
      //   include: path.resolve(__dirname, 'src/styles'),
      //   use: [
      //     {
      //       loader: require.resolve('style-loader'),
      //       options: {
      //         attributes: {
      //           nonce: '---CSP_NONCE---',
      //           'data-target': 'flex-css',
      //         },
      //       },
      //     },
      //     require.resolve('css-loader'),
      //     require.resolve('postcss-loader'),
      //   ],
      // },

      {
        test: /\.module\.css$/i,
        include: path.resolve(__dirname, 'dist/styles'),
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod 
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                emit: true,
              },
            } : {
              loader: require.resolve('style-loader'),
              options: {
                attributes: {
                  nonce: '---CSP_NONCE---',
                  'data-target': 'flex-css',
                },
              },
            },
          {
            loader: require.resolve('css-loader'),
            options: {
              esModule: true,
              sourceMap: mode === 'development',
              importLoaders: 1,
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[local]__[hash:base64:5]'
              },
            },
          },
          require.resolve('postcss-loader'),
        ],
      },

      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        include: path.resolve(__dirname, 'dist/styles'),
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod 
            ? {
              loader: MiniCssExtractPlugin.loader,
              options: {
                emit: true,
              },
            } : {
              loader: require.resolve('style-loader'),
              options: {
                attributes: {
                  nonce: '---CSP_NONCE---',
                  'data-target': 'flex-css',
                },
              },
            },
          require.resolve('css-loader'),
          require.resolve('postcss-loader'),
        ],
      },

    ]
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: `${`flex_tailwind`}`,
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './Tailwind': './src/js/tailwind',
    //   },
    //   shared: [
    //     {
    //       ...depsMonorepo,
    //       ...deps,
    //       react: {
    //         singleton: true,
    //         requiredVersion: depsMonorepo.react
    //       },
    //       '@flexiness/domain-lib-mobx-react-router': {
    //         import: '@flexiness/domain-lib-mobx-react-router',
    //         requiredVersion: depsMonorepo['@flexiness/domain-lib-mobx-react-router'],
    //         // requiredVersion: require(`${rootLocation}/node_modules/@flexiness/domain-lib-mobx-react-router/package.json`).version,
    //         shareKey: '@flexiness/domain-lib-mobx-react-router', // under this name the shared module will be placed in the share scope
    //         shareScope: 'default', // share scope with this name will be used
    //         singleton: true, // only a single version of the shared module is allowed
    //       },
    //       '@flexiness/domain-lib-global-react': {
    //         import: '@flexiness/domain-lib-global-react',
    //         requiredVersion: depsMonorepo['@flexiness/domain-lib-global-react'],
    //         // requiredVersion: require(`${rootLocation}/node_modules/@flexiness/domain-lib-global-react/package.json`).version,
    //         shareKey: '@flexiness/domain-lib-global-react', // under this name the shared module will be placed in the share scope
    //         shareScope: 'default', // share scope with this name will be used
    //         singleton: true, // only a single version of the shared module is allowed
    //       },
    //       '@flexiness/domain-lib-utils': {
    //         import: '@flexiness/domain-lib-utils',
    //         requiredVersion: depsMonorepo['@flexiness/domain-lib-utils'],
    //         // requiredVersion: require(`${rootLocation}/node_modules/@flexiness/domain-lib-utils/package.json`).version,
    //         shareKey: '@flexiness/domain-lib-utils', // under this name the shared module will be placed in the share scope
    //         shareScope: 'default', // share scope with this name will be used
    //         singleton: true, // only a single version of the shared module is allowed
    //       },
    //     },
    //   ]
    // }),
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    // }),
    new webpack.DefinePlugin({
      // // @ts-expect-error
      // __GIT_BRANCH__: childProcess.execSync('git rev-parse --abbrev-ref HEAD'),
      // // @ts-expect-error
      // __GIT_COMMIT__: childProcess.execSync('git rev-parse HEAD'),

      // ensure the NODE_ENV targets production, making react optimized for production
      // with lesser checks and assertions
      // as per https://reactjs.org/docs/optimizing-performance.html#webpack
      // 'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env': JSON.stringify(process.env)
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      linkType: 'text/css',
      runtime: true,
      // runtime: false, // loading mechanism in production deferred to node express server to allow csp nonce
      attributes: {
        'data-target': 'flex-css',
      },
    }),
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]
}
