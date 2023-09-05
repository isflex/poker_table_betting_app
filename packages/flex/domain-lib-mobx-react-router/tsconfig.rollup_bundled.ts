const path = require('path')
const cwd = process.cwd()

const tsconfig = {
  compilerOptions: {
    target: 'es6',
    lib: [
      'dom',
      'dom.iterable',
      'esnext'
    ],
    experimentalDecorators: true,
    allowJs: true,
    skipLibCheck: true,
    esModuleInterop: true,
    allowSyntheticDefaultImports: true,
    strict: true,
    forceConsistentCasingInFileNames: true,
    noFallthroughCasesInSwitch: true,
    module: 'commonjs',
    moduleResolution: 'node',
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    jsx: 'react',
    sourceMap: true,
    baseUrl: '.',
    paths: {
      "flexiness": ["../types"]
    },
    typeRoots: ['node_modules/@types'],
    rootDir: `${path.join(cwd, '../domain-app/src')}`
  },
  include: [
    `${path.join(cwd, '../domain-app/src/FlexMobxReactRouter.ts')}`
  ]
}

export default tsconfig
