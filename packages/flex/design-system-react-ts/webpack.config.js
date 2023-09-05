/* eslint-disable @typescript-eslint/no-var-requires */

// System dependencies
const path = require('path')
const webpack = require('webpack')
const childProcess = require('child_process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { ModuleFederationPlugin } = webpack.container
const { NodeAsyncHttpRuntime } = require('@telenko/node-mf')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const WebpackRequireFrom = require('webpack-require-from')

/* eslint-enable @typescript-eslint/no-var-requires */

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

// const rootLocation = '../../..'

// const rootLocation = require.main.paths[0].split('node_modules')[0].slice(0, -1)

const findWorkspaceRoot = require('find-yarn-workspace-root')
const workspacePath = findWorkspaceRoot(__dirname)
const rootLocation = path.relative(__dirname, workspacePath)
console.log('rootLocation : ', rootLocation)
console.log('host : ', process.env.FLEX_DESIGN_SYS_REACT_TS_HOST)

// eslint-disable-next-line @typescript-eslint/no-var-requires
const depsMonorepo = require(`${rootLocation}/package.json`).dependencies
// eslint-disable-next-line @typescript-eslint/no-var-requires
const deps = require('./package.json').dependencies

const getConfig = (target) => ({

  experiments: {
    // asyncWebAssembly: true,
    // buildHttp: true,
    // layers: true,
    // lazyCompilation: true,
    // outputModule: true,
    // syncWebAssembly: true,
    topLevelAwait: true,
  },

  // entry: ['regenerator-runtime/runtime.js', path.resolve(__dirname, 'src/views/index')],
  entry: {
    [`mainEntry_${process.env.FLEX_DESIGN_SYS_REACT_TS_NAME}`]: [
      // require.resolve('regenerator-runtime/runtime.js'),
      path.resolve(__dirname, 'src/views/index')
    ],
  },

  context: __dirname, // to automatically find tsconfig.json

  ...(target === 'web'
    ? {
      devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
        },
        open: false,
        compress: true,
        port: new Number(process.env.FLEX_DESIGN_SYS_REACT_TS_PORT),
      },
    } : null
  ),

  // mode: 'development',
  mode: mode,

  target: target === 'web' ? 'browserslist:last 1 chrome version' : false,

  output: {
    path: path.resolve(__dirname, 'build', target),
    publicPath: `${process.env.FLEX_DESIGN_SYS_REACT_TS_HOST}/${target}/`,
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
      //       name: `Vendors_${process.env.FLEX_DESIGN_SYS_REACT_TS_NAME}`,
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
      //       name: `Common_${process.env.FLEX_DESIGN_SYS_REACT_TS_NAME}`,
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

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.d.ts', '.ttf', '.scss'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.build.json'),
      })
    ],
    
    fallback: {
      'buffer': require.resolve('buffer'),
      'crypto': require.resolve('crypto-browserify'),
      'stream': require.resolve('stream-browserify')
    },

    alias: {
      // /!\ Aliases are now defined by typescript paths thru TsconfigPathsPlugin

      // react: path.resolve(`${rootLocation}/node_modules/react`),
      // history: path.resolve(`${rootLocation}/node_modules/history`),

      // 'react-dom': path.resolve(`${rootLocation}/node_modules/react-dom`),
      // 'react-helmet': path.resolve(`${rootLocation}/node_modules/react-helmet`),
      // 'react-router-dom': path.resolve(`${rootLocation}/node_modules/react-router-dom`),

      // lodash: path.resolve(`${rootLocation}/node_modules/lodash`),
    }
  },
  
  module: {
    rules: [

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
      // {
      //   test: /\.tsx?$/,
      //   loader: require.resolve('babel-loader'),
      //   exclude: /node_modules/,
      //   options: {
      //     presets: ['@babel/preset-react', '@babel/preset-typescript'],
      //   },
      // },
      // {
      //   test: /\.jsx?$/,
      //   loader: require.resolve('babel-loader'),
      //   exclude: /node_modules/,
      //   options: {
      //     presets: ['@babel/preset-react'],
      //   },
      // },

      // ///////////////////////////////////////////////////////

      {
        test: /\.css$/i,
        use: [
          ...(target === 'web' ? [
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
          ] : []),

          {
            loader: require.resolve('css-loader'),
            options: {
              esModule: false,
            }
          }
        ]
      },

      // ///////////////////////////////////////////////////////
      
      // Modular Sass loaders
      ...require(`${rootLocation}/packages/flex/config/webpack/partial/loaders/modularSass.cjs`)(target),

      // ///////////////////////////////////////////////////////
      // Load font files and images
      {
        test: /\.(woff|woff2|ttf|eot|svg|jpg|jpeg|png|gif)(\?[\s\S]+)?$/,
        use: [
          {
            loader: require.resolve('file-loader'),
            options: {
              esModule: true
            }
          }
        ]
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      // name: 'flex_design_system_react_ts_modfed',
      name: `${process.env.FLEX_DESIGN_SYS_REACT_TS_NAME}`,
      filename: 'remoteEntry.js',
      // remotes: {
      //   [`${process.env.ACO_MF_NAME}`]: `${process.env.ACO_MF_NAME}@${process.env.ACO_PROTOCOL}${process.env.ACO_HOSTNAME}:${process.env.ACO_PORT}/remoteEntry.js`
      // },
      remotes: {},
      exposes: {
        './Components': './src/index',
        './UnStyled': './src/unstyled',
        './Styled': './src/styled',
        './Modules': './src/views/Modules'
      },
      shared: {
        ...deps,
        ...depsMonorepo,
        react: {
          singleton: true,
          requiredVersion: depsMonorepo.react,
          // eager: true,
        },
        // 'react-dom': {
        //   singleton: true,
        //   requiredVersion: depsMonorepo['react-dom'],
        // },
        // 'react-router-dom': {
        //   singleton: true,
        //   requiredVersion: depsMonorepo['react-router-dom'],
        // },
        history: {
          singleton: true,
          requiredVersion: depsMonorepo['history'],
          // eager: true,
        },
        '@emotion/react': {
          singleton: true,
          requiredVersion: depsMonorepo['@emotion/react'],
          eager: true,
        },
        'react-awesome-reveal': {
          singleton: true,
          requiredVersion: depsMonorepo['react-awesome-reveal'],
          eager: true,
        },
        // 'prop-types': {
        //   // singleton: true,
        //   // requiredVersion: depsMonorepo['prop-types'],
        //   eager: true,
        // },
        // lodash: {
        //   singleton: true,
        //   requiredVersion: depsMonorepo['lodash'],
        //   eager: true,
        // },
        // mobx: {
        //   singleton: true,
        //   requiredVersion: depsMonorepo['mobx'],
        // },
        // 'mobx-react-lite': {
        //   singleton: true,
        //   requiredVersion: depsMonorepo['mobx-react-lite'],
        // },
        // '@loadable/component': {
        //   singleton: true,
        //   requiredVersion: depsMonorepo['@loadable/component'],
        // },
        '@flexiness/domain-lib-mobx-react-router': {
          import: '@flexiness/domain-lib-mobx-react-router',
          requiredVersion: depsMonorepo['@flexiness/domain-lib-mobx-react-router'],
          shareKey: '@flexiness/domain-lib-mobx-react-router', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        '@flexiness/domain-lib-global-react': {
          import: '@flexiness/domain-lib-global-react',
          requiredVersion: depsMonorepo['@flexiness/domain-lib-global-react'],
          shareKey: '@flexiness/domain-lib-global-react', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        '@flexiness/domain-lib-utils': {
          import: '@flexiness/domain-lib-utils',
          requiredVersion: depsMonorepo['@flexiness/domain-lib-utils'],
          shareKey: '@flexiness/domain-lib-utils', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
        '@flex-design-system/framework': {
          import: '@flex-design-system/framework',
          requiredVersion: depsMonorepo['@flex-design-system/framework'],
          shareKey: '@flex-design-system/framework', // under this name the shared module will be placed in the share scope
          shareScope: 'default', // share scope with this name will be used
          singleton: true, // only a single version of the shared module is allowed
        },
      }
    }),
    // new ForkTsCheckerWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        memoryLimit: 2048,
        mode: 'readonly',
        // configFile: path.resolve(__dirname, 'tsconfig.build.json'),
        configFile: path.resolve(__dirname, 'tsconfig.json'),
        // typescriptPath: `${process.env.PROJECT_CWD}/.yarn/sdks/typescript/lib/typescript.js`
      }
    }),
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
    ...(target === 'web'
      ? [
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
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
      ]
      : [new NodeAsyncHttpRuntime()]
    ),
    new AssetsPlugin({
      filename: 'assets.json',
      entrypoints: true,
      includeFilesWithoutChunk: true
    }),
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
    new WebpackRequireFrom({
      variableName: `${process.env.FLEX_DESIGN_SYS_REACT_TS_NAME}_url`,
      suppressErrors: true
    })
  ],
})

module.exports = [getConfig('web'), getConfig('node')]
