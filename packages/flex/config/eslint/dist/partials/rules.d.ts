declare const rules: {
    'arrow-spacing': number;
    'block-spacing': number;
    'brace-style': number;
    camelcase: (string | {
        properties: string;
    })[];
    'comma-dangle': (string | number)[];
    'comma-spacing': number;
    'comma-style': string[];
    'default-case': string;
    'dot-location': string[];
    'dot-notation': number;
    'eol-last': number;
    'func-call-spacing': number;
    'function-paren-newline': string[];
    'import/export': number;
    indent: (string | number | {
        SwitchCase: number;
        VariableDeclarator: number;
    })[];
    'jsx-quotes': string[];
    'key-spacing': number;
    'keyword-spacing': number;
    'lines-between-class-members': number;
    'max-len': (string | {
        code: number;
    })[];
    'new-cap': number;
    'no-alert': number;
    'no-async-promise-executor': number;
    'no-case-declarations': number;
    'no-confusing-arrow': number;
    'no-console': number;
    'no-const-assign': number;
    'no-duplicate-imports': number;
    'no-eval': number;
    'no-extend-native': number;
    'no-prototype-builtins': number;
    'no-misleading-character-class': number;
    'no-multiple-empty-lines': (number | {
        max: number;
    })[];
    'no-trailing-spaces': number;
    'no-unneeded-ternary': number;
    'no-unused-expressions': number;
    'no-useless-catch': number;
    'no-mixed-spaces-and-tabs': string[];
    '@typescript-eslint/no-unused-vars': string;
    'no-unused-vars': string;
    'no-use-before-define': string;
    '@typescript-eslint/no-use-before-define': string[];
    'no-useless-constructor': number;
    'no-var': number;
    'object-curly-spacing': (string | number)[];
    'object-curly-newline': number;
    'prefer-const': number;
    'prefer-destructuring': (string | {
        array: boolean;
        object: boolean;
    })[];
    'prefer-rest-params': number;
    'prefer-spread': number;
    'prefer-template': number;
    quotes: (string | {
        avoidEscape: boolean;
        allowTemplateLiterals: boolean;
    })[];
    'quote-props': string[];
    'react/display-name': number;
    'react/jsx-key': number;
    'react/jsx-no-duplicate-props': number;
    'react/jsx-no-useless-fragment': number;
    'react/jsx-no-target-blank': number;
    'react-hooks/rules-of-hooks': string;
    'react-hooks/exhaustive-deps': string;
    'react/prop-types': number;
    'rest-spread-spacing': number;
    semi: string[];
    'spaced-comment': string[];
    'space-before-function-paren': string;
    'switch-colon-spacing': number;
    'import/default': string;
    'import/no-unresolved': (string | {
        commonjs: boolean;
        amd: boolean;
    })[];
    'import/no-default-export': number;
    '@typescript-eslint/no-inferrable-types': string;
    '@typescript-eslint/ban-ts-comment': string;
    'no-restricted-imports': (string | {
        paths: {
            name: string;
            message: string;
        }[];
    })[];
};
export { rules };
