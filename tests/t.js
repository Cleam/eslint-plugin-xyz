module.exports = {
  configs: {
    common: {
      env: { browser: true, node: true, es6: true },
      parserOptions: {
        ecmaVersion: 2021,
        parser: '@babel/eslint-parser',
        sourceType: 'module',
      },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            jsxSingleQuote: true,
            singleQuote: true,
            printWidth: 100,
            tabWidth: 2,
            semi: true,
            overrides: [
              { files: ['*.md'], options: { parser: 'markdown' } },
              { files: '*.json', options: { parser: 'json' } },
              {
                files: ['*.css', '*.scss', '*.less'],
                options: { singleQuote: false },
              },
              { files: '*.scss', options: { parser: 'scss' } },
              { files: '*.less', options: { parser: 'less' } },
              { files: '*.vue', options: { parser: 'vue' } },
              {
                files: ['*.js', '*.jsx'],
                options: { parser: 'babel' },
              },
              {
                files: ['*.ts', '*.tsx'],
                options: { parser: 'babel-ts' },
              },
            ],
          },
        ],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-console': 'off',
      },
    },
    vue: {
      env: { browser: true, node: true, es6: true },
      parserOptions: {
        ecmaVersion: 2021,
        parser: '@babel/eslint-parser',
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:vue/essential',
        '@vue/prettier',
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            jsxSingleQuote: true,
            singleQuote: true,
            printWidth: 100,
            tabWidth: 2,
            semi: true,
            overrides: [
              { files: ['*.md'], options: { parser: 'markdown' } },
              { files: '*.json', options: { parser: 'json' } },
              {
                files: ['*.css', '*.scss', '*.less'],
                options: { singleQuote: false },
              },
              { files: '*.scss', options: { parser: 'scss' } },
              { files: '*.less', options: { parser: 'less' } },
              { files: '*.vue', options: { parser: 'vue' } },
              {
                files: ['*.js', '*.jsx'],
                options: { parser: 'babel' },
              },
              {
                files: ['*.ts', '*.tsx'],
                options: { parser: 'babel-ts' },
              },
            ],
          },
        ],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-console': 'off',
      },
    },
    vue3: {
      env: { browser: true, node: true, es6: true },
      parserOptions: {
        ecmaVersion: 2021,
        parser: '@babel/eslint-parser',
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:vue/vue3-essential',
        '@vue/prettier',
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            jsxSingleQuote: true,
            singleQuote: true,
            printWidth: 100,
            tabWidth: 2,
            semi: true,
            overrides: [
              { files: ['*.md'], options: { parser: 'markdown' } },
              { files: '*.json', options: { parser: 'json' } },
              {
                files: ['*.css', '*.scss', '*.less'],
                options: { singleQuote: false },
              },
              { files: '*.scss', options: { parser: 'scss' } },
              { files: '*.less', options: { parser: 'less' } },
              { files: '*.vue', options: { parser: 'vue' } },
              {
                files: ['*.js', '*.jsx'],
                options: { parser: 'babel' },
              },
              {
                files: ['*.ts', '*.tsx'],
                options: { parser: 'babel-ts' },
              },
            ],
          },
        ],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-console': 'off',
      },
    },
    vue3_ts: {
      env: { browser: true, node: true, es6: true },
      parserOptions: {
        ecmaVersion: 2021,
        parser: '@babel/eslint-parser',
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:vue/vue3-essential',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint',
      ],
      rules: {
        'prettier/prettier': [
          'error',
          {
            jsxSingleQuote: true,
            singleQuote: true,
            printWidth: 100,
            tabWidth: 2,
            semi: true,
            overrides: [
              { files: ['*.md'], options: { parser: 'markdown' } },
              { files: '*.json', options: { parser: 'json' } },
              {
                files: ['*.css', '*.scss', '*.less'],
                options: { singleQuote: false },
              },
              { files: '*.scss', options: { parser: 'scss' } },
              { files: '*.less', options: { parser: 'less' } },
              { files: '*.vue', options: { parser: 'vue' } },
              {
                files: ['*.js', '*.jsx'],
                options: { parser: 'babel' },
              },
              {
                files: ['*.ts', '*.tsx'],
                options: { parser: 'babel-ts' },
              },
            ],
          },
        ],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-console': 'off',
      },
    },
    react: {
      env: { browser: true, node: true, es6: true },
      parserOptions: {
        ecmaVersion: 2021,
        parser: '@babel/eslint-parser',
        sourceType: 'module',
      },
      extends: ['eslint:recommended', 'plugin:prettier/recommended', 'react-app', 'react-app/jest'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            jsxSingleQuote: true,
            singleQuote: true,
            printWidth: 100,
            tabWidth: 2,
            semi: true,
            overrides: [
              { files: ['*.md'], options: { parser: 'markdown' } },
              { files: '*.json', options: { parser: 'json' } },
              {
                files: ['*.css', '*.scss', '*.less'],
                options: { singleQuote: false },
              },
              { files: '*.scss', options: { parser: 'scss' } },
              { files: '*.less', options: { parser: 'less' } },
              { files: '*.vue', options: { parser: 'vue' } },
              {
                files: ['*.js', '*.jsx'],
                options: { parser: 'babel' },
              },
              {
                files: ['*.ts', '*.tsx'],
                options: { parser: 'babel-ts' },
              },
            ],
          },
        ],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-console': 'off',
      },
    },
    node: {
      env: { browser: true, node: true, es6: true },
      parserOptions: {
        ecmaVersion: 2021,
        parser: '@babel/eslint-parser',
        sourceType: 'module',
      },
      extends: ['eslint:recommended', 'plugin:prettier/recommended'],
      rules: {
        'prettier/prettier': [
          'error',
          {
            jsxSingleQuote: true,
            singleQuote: true,
            printWidth: 100,
            tabWidth: 2,
            semi: true,
            overrides: [
              { files: ['*.md'], options: { parser: 'markdown' } },
              { files: '*.json', options: { parser: 'json' } },
              {
                files: ['*.css', '*.scss', '*.less'],
                options: { singleQuote: false },
              },
              { files: '*.scss', options: { parser: 'scss' } },
              { files: '*.less', options: { parser: 'less' } },
              { files: '*.vue', options: { parser: 'vue' } },
              {
                files: ['*.js', '*.jsx'],
                options: { parser: 'babel' },
              },
              {
                files: ['*.ts', '*.tsx'],
                options: { parser: 'babel-ts' },
              },
            ],
          },
        ],
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'no-console': 'off',
      },
    },
  },
};
