module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  rangeStart: 0,
  rangeEnd: Infinity,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
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
