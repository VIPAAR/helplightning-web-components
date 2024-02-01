module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
    'class-methods-use-this': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': 0,
  },
};
