const path = require('path');

const config = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: [
    '/*.*',
    'node_modules/**',
    'build/**',
    'coverage/**',
    'stories/**',
    '**/**/*.stories.tsx',
    'scripts/**',
    'cdk/**',
  ],
  overrides: [
    {
      files: ['**/**/*.stories.tsx'],
      parserOptions: {
        project: [path.resolve(__dirname, 'tsconfig.json')],
      },
      rules: {
        'react/display-name': 'off',
        'no-type-assertion/no-type-assertion': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    project: [path.resolve(__dirname, 'tsconfig.json')],
    sourceType: 'module',
  },
  plugins: ['import', 'jest', '@typescript-eslint', 'react', 'react-hooks', 'no-type-assertion'],
  rules: {
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '_',
        argsIgnorePattern: '_',
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        classes: false,
        functions: false,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: ['builtin', 'external', 'internal', 'type', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-multi-spaces': ['error'],
    'no-type-assertion/no-type-assertion': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['tsx'],
      },
    ],
    'react/no-array-index-key': 'error',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'error',
    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    '@typescript-eslint/unbound-method': 'off',
    'no-duplicate-imports': 'error',
  },
  settings: {
    'import/internal-regex': '^src/',
    react: {
      version: 'detect',
    },
  },
};

module.exports = config;
