module.exports = {
  root: true,
  // 環境の指定。環境とは、あらかじめ定義されたグローバル変数のこと
  env: { 
    browser: true,
    es2021: true,
    node: true,
  },
  // ルール設定のプリセットを使用する。
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  // Typescriptのコードをlintできるようにする。
  parser: '@typescript-eslint/parser',
  // 追加の設定オプション
  parserOptions: {
    // jsxファイルの解析を有効にする。
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  settings: {
    // TypeScriptサポートをeslint-plugin-importに追加
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'latest',
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/react-in-jsx-scope': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-console': [
      1,
      {
        allow: ['warn', 'error'],
      },
    ],
    'import/prefer-default-export': [0],
    'react/prop-types': [0],
  },
};
