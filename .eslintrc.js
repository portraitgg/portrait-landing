module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    emcaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']]
      }
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // 'next',
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals',
    'plugin:import/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended'
  ],
  plugins: [],
  rules: {
    'prettier/prettier': 'error',
    // Not needed in Next.js
    'react/react-in-jsx-scope': 'off',
    semi: ['error', 'never'],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 2,
        when: 'multiline'
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'comma-dangle': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either'
      }
    ],
    // Next/Link: ignore a without href inside Link
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton']
      }
    ]
  }
}
