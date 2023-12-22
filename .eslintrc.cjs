module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['solid', '@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:solid/typescript',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'no-param-reassign': 0,
  },
};
