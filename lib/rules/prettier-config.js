module.exports = {
  jsxSingleQuote: true,
  singleQuote: true,
  printWidth: 100,
  tabWidth: 2,
  semi: true,
  overrides: [
    {
      files: ['*.md'],
      options: { parser: 'markdown' },
    },
    {
      files: '*.json',
      options: { parser: 'json' },
    },
    {
      files: ['*.css', '*.scss', '*.less'],
      options: { singleQuote: false },
    },
    {
      files: '*.scss',
      options: { parser: 'scss' },
    },
    {
      files: '*.less',
      options: { parser: 'less' },
    },
    {
      files: '*.vue',
      options: { parser: 'vue' },
    },
    {
      files: ['*.js', '*.jsx'],
      options: { parser: 'babel' },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: { parser: 'babel-ts' },
    },
  ],
};
