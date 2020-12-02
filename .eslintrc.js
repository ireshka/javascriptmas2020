module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    /**
     * @info General eslint extends
     */
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/all',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier/babel',
    /**
     * @info Node-related eslint extends
     */
    'plugin:node/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    /**
     * @info General eslint plugins
     */

    'import',
    'jest',
    'jest-dom',
    'prettier',
    'promise',
    'sort-keys-fix',
    'unicorn',
  ],
  rules: {
    /**
     * @info sort-keys-fix rules
     */
    'sort-keys-fix/sort-keys-fix': 'warn',
    /**
     * @info unicorn rules
     */
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkFilenames: false,
        checkProperties: true,
      },
    ],
    /**
     * @info jest rules
     */
    'jest/no-disabled-tests': 'off',
  },
  settings: {
    jest: {
      version: 26,
    },
  },
  overrides: [
    {
      files: ['.eslintrc.js', '*.config.js'],
      rules: {
        'sort-keys-fix/sort-keys-fix': 'off',
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ],
};
