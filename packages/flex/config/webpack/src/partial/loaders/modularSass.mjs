/* eslint-disable @typescript-eslint/no-var-requires */
// require.resolve for ES modules
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

const mode = process.env.NODE_ENV || 'development'
// const prod = mode === 'production'
// import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const modularSass = (target='web') => {
  return ([
    {
      test: /\.module\.s(a|c)ss$/i,
      use: [

        // ...(target === 'web' ? [
        //   prod ? MiniCssExtractPlugin.loader :
        //     {
        //       loader: require.resolve('style-loader'),
        //       options: {
        //         attributes: {
        //           nonce: '---CSP_NONCE---',
        //           'data-target': 'flex-css',
        //         },
        //       },
        //     },
        // ] : []),

        // prod
        //   ? {
        //     loader: MiniCssExtractPlugin.loader
        //   } : {
        //     loader: require.resolve('style-loader'),
        //     options: {
        //       attributes: {
        //         nonce: '---CSP_NONCE---',
        //         'data-target': 'flex-css',
        //       },
        //     },
        //   },

        // {
        //   loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       emit: true,
        //   },
        // },

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
            importLoaders: 1,
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
                  exportOnlyLocals: target === 'node',
                }
              } : null),
          },
        },
        // {
        //   loader: require.resolve('postcss-loader'),
        //   options: {
        //     implementation: require.resolve('postcss')
        //   },
        // },
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

        // ...(target === 'web' ? [
        //   prod ? MiniCssExtractPlugin.loader :
        //     {
        //       loader: require.resolve('style-loader'),
        //       options: {
        //         attributes: {
        //           nonce: '---CSP_NONCE---',
        //           'data-target': 'flex-css',
        //         },
        //       },
        //     },
        // ] : []),

        // prod
        //   ? {
        //     loader: MiniCssExtractPlugin.loader
        //   } : {
        //     loader: require.resolve('style-loader'),
        //     options: {
        //       attributes: {
        //         nonce: '---CSP_NONCE---',
        //         'data-target': 'flex-css',
        //       },
        //     },
        //   },
        
        // {
        //   loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       emit: true,
        //   },
        // },

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
            importLoaders: 1,
          }
        },
        // {
        //   loader: require.resolve('postcss-loader'),
        //   options: {
        //     implementation: require.resolve('postcss')
        //   },
        // },
        {
          loader: require.resolve('sass-loader'),
          options: {
            implementation: require('sass'),
            sourceMap: mode === 'development'
          },
        },
      ],
    }
  ])
}

export { modularSass }