module.exports = {
  ignorePatterns: ['load-test/**'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },

  env: {
    commonjs: true,
    es2022: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  rules: {
    'consistent-return': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-console': 0,
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'no-underscore-dangle': 0,
    'no-return-await': 0,
    'no-void': 0,

    '@typescript-eslint/no-misused-promises': 2,
    '@typescript-eslint/no-floating-promises': [
      2,
      {
        ignoreVoid: true,
        ignoreIIFE: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
