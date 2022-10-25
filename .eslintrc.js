module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'next/core-web-vitals'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': ['warn', {extensions: ['.tsx']}],
    'comma-dangle': ['error', 'always-multiline'],
    'eol-last': ['error', 'always'],
    'function-call-argument-newline': ['error', 'consistent'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'keyword-spacing': 'error',
    'max-len': [
      'warn',
      180,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-tabs': ['off'],
    'object-curly-spacing': ['error', 'never'],
    // Commented out because it conflicts with Prettier
    //'operator-linebreak': ['error', 'after'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    semi: ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': 'error',
  },
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
