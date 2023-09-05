// {
//   "parser": "babel-eslint",
//   "parserOptions": {
//     "ecmaVersion": 7,
//     "sourceType": "module"
//   },
//   "rules": {
//     "linebreak-style": [
//       "error",
//       "unix"
//     ],

//     "arrow-spacing": 2,
//     "block-spacing": 1,
//     "brace-style": 1,
//     "camelcase": ["error", { "properties": "always" }],
//     "comma-dangle": [0, "always-multiline"],
//     "comma-spacing": 1,
//     "comma-style": 1,
//     "default-case": "error",
//     "dot-location": ["warn", "property"],
//     "dot-notation": 0,
//     "eol-last": 2,
//     "func-call-spacing": 2,
//     "function-paren-newline": ["error", "multiline-arguments"],
//     "import/export": 0,
//     "indent": ["warn", 2, { "SwitchCase": 2 }],
//     "jsx-quotes": ["warn", "prefer-single"],
//     "key-spacing": 1,
//     "keyword-spacing": 1,
//     "lines-between-class-members": 1,
//     "max-len": ["error", { "code": 150 }],
//     "new-cap": 0,
//     "no-alert": 1,
//     "no-async-promise-executor": 1,
//     "no-case-declarations": 1,
//     "no-confusing-arrow": 1,
//     "no-console": 2,
//     "no-const-assign": 2,
//     "no-duplicate-imports": 1,
//     "no-eval": 2,
//     "no-extend-native": 2,
//     "no-prototype-builtins": 1,
//     "no-misleading-character-class": 0,
//     "no-multiple-empty-lines": [1, { "max": 1 }],
//     "no-trailing-spaces": 1,
//     "no-unneeded-ternary": 1,
//     "no-unused-expressions": 1,
//     "no-useless-catch": 1,

//     // https://stackoverflow.com/questions/57802057/eslint-configuring-no-unused-vars-for-typescript
//     "@typescript-eslint/no-unused-vars": "error",
//     // "no-unused-vars": "off",
//     "no-unused-vars": "warn",

//     // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use
//     "no-use-before-define": "off",
//     "@typescript-eslint/no-use-before-define": ["error"],

//     "no-useless-constructor": 1,
//     "no-var": 1,
//     "object-curly-spacing": [1, "always"],
//     "object-curly-newline": 1,
//     "prefer-const": 1,
//     "prefer-destructuring": ["warn", { "array": true, "object": true }],
//     "prefer-rest-params": 1,
//     "prefer-spread": 1,
//     "prefer-template": 1,
//     "quotes": ["warn", "single", { "avoidEscape": true, "allowTemplateLiterals": true }],
//     "quote-props": ["warn", "as-needed"],
//     "react/display-name": 2,
//     "react/jsx-key": 2,
//     "react/jsx-no-duplicate-props": 2,
//     "react/jsx-no-useless-fragment": 1,
//     "react/jsx-no-target-blank": 2,
//     "react-hooks/rules-of-hooks": "error",
//     "react-hooks/exhaustive-deps": "warn",
//     "react/prop-types": 0,
//     "rest-spread-spacing": 2,
//     "semi": ["error", "never", { "beforeStatementContinuationChars": "always" }],
//     "spaced-comment": ["warn", "always"],
//     "space-before-function-paren": "off",
//     "switch-colon-spacing": 1,

//     // turn on errors for missing imports
//     // "import/no-unresolved": "error",
//     "import/no-unresolved": [1, { "commonjs": true, "amd": true }],

//     "@typescript-eslint/no-inferrable-types": "off",

//     "no-restricted-imports": ["error", {
//       "paths": [{
//         "name": "BrowserRouter",
//         "message": "Please import { FlexBrowserRouter } from '@flexiness/domain-lib-flex-browser-router' instead."
//       }]
//     }]
//   }
// }

module.exports = {
  root: true,
  extends: [
    '@flexiness/eslint-config-flex'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js'
      },
      typescript: {
        project: {}
      }
    },
  },
  ignorePatterns: ['Dockerfile', 'README.md', '*.yaml', 'node_modules/', 'build/', 'dist/', 'public/']
}

