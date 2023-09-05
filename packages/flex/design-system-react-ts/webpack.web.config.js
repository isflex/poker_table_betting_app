/* eslint-disable @typescript-eslint/no-var-requires */

// System dependencies
const path = require('path')
const webpack = require('webpack')
const childProcess = require('child_process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { ModuleFederationPlugin } = webpack.container
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')

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

module.exports = {

  experiments: {
    // asyncWebAssembly: true,
    // buildHttp: true,
    // layers: true,
    // lazyCompilation: true,
    // outputModule: true,
    // syncWebAssembly: true,
    topLevelAwait: true,
  },

  // entry: path.resolve(__dirname, 'src/views/index'),
  entry: {
    [`mainEntry_${process.env.FLEX_DESIGN_SYS_REACT_TS_NAME_WEB_ONLY}`]: [
      require.resolve('regenerator-runtime/runtime.js'),
      path.resolve(__dirname, 'src/views/index')
    ],
  },

  context: __dirname, // to automatically find tsconfig.json

  devServer: {
    // contentBase: path.resolve(__dirname, 'public'),
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
    port: new Number(process.env.FLEX_DESIGN_SYS_REACT_TS_PORT_WEB_ONLY),
  },

  // mode: 'development',
  mode: mode,

  target: 'browserslist:last 1 chrome version',

  output: {
    path: path.resolve(__dirname, 'build'),
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.d.ts', '.ttf'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, 'tsconfig.build.json'),
      })
    ],
    alias: {
      // /!\ Aliases are now defined by typescript paths thru TsconfigPathsPlugin

      // react: path.resolve(`${rootLocation}/node_modules/react`),
      // history: path.resolve(`${rootLocation}/node_modules/history`),

      // 'react-dom': path.resolve(`${rootLocation}/node_modules/react-dom`),
      // 'react-helmet': path.resolve(`${rootLocation}/node_modules/react-helmet`),
      // 'react-router-dom': path.resolve(`${rootLocation}/node_modules/react-router-dom`),

      // lodash: path.resolve(`${rootLocation}/node_modules/lodash`),
      // history: path.resolve(`${rootLocation}/node_modules/react-router-dom/node_modules/history`),
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
          prod ? MiniCssExtractPlugin.loader :
            {
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
              esModule: false,
            }
          }
        ]
      },

      // ///////////////////////////////////////////////////////
      
      {
        test: /\.module\.s(a|c)ss$/i,
        use: [
          prod ? MiniCssExtractPlugin.loader :
            {
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
              importLoaders: 2,
              ...(process.env.FLEX_GATEWAY_MODULE_CSS === 'default'
                ? {
                  modules: {
                    exportLocalsConvention: 'camelCase',
                    localIdentName: '[local]__[hash:base64:5]'
                  },
                } : null),
              ...(process.env.FLEX_GATEWAY_MODULE_CSS === 'named'
                ? {
                  modules: {
                    namedExport: true,
                    exportLocalsConvention: 'camelCaseOnly',
                    // exportOnlyLocals: true,
                    // exportOnlyLocals: mode === 'production',
                    // localIdentName: mode === 'production'
                    //   ? '[path][name]__[local]--[hash:base64:5]'
                    //   : '[path][name]__[local]',
                  }
                } : null),
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
              implementation: require.resolve('postcss'),
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              implementation: require('sass'),
              sourceMap: mode === 'development'
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /\.module.(s(a|c)ss)$/,
        use: [
          prod ? MiniCssExtractPlugin.loader :
            {
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
              esModule: false,
              importLoaders: 2,
            }
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
              implementation: require.resolve('postcss'),
            },
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              implementation: require('sass'),
              sourceMap: mode === 'development'
            },
          },
        ],
      },

      // //////////////////////////////////////////////////////////////

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
      // name: 'flex_design_system_react_ts_web_modfed',
      name: `${process.env.FLEX_DESIGN_SYS_REACT_TS_NAME_WEB_ONLY}`,
      filename: 'remoteEntry.js',
      remotes: {
        [`${process.env.ACO_MF_NAME}`]: `${process.env.ACO_MF_NAME}@${process.env.ACO_PROTOCOL}${process.env.ACO_HOSTNAME}:${process.env.ACO_PORT}/remoteEntry.js`
      },
      exposes: {
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
    new HtmlWebpackPlugin({
      template: 'public/index.html',
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
      linkType: 'text/css',
      attributes: {
        nonce: '---CSP_NONCE---',
        'data-target': 'flex-css',
      },
    }),
  ],
}
