module.exports = {
  jsxSingleQuote: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  overrides: [
    {
      files: '*.css',
      options: { singleQuote: false },
    },
  ],
};
