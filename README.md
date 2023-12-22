# solid-routes

This is my personal notes to setup solidjs project.

```
npm create vite@latest solid-routes -- --template solid-ts

npm install --save-dev eslint eslint-plugin-solid @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-prettier prettier

npm init @eslint/config

```

in the `.eslintrc.cjs`:

```
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
```

in the `.prettierrc.cjs` :

```
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
};
```
