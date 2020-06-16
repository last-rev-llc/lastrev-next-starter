module.exports = {
    extends: ['airbnb', 'plugin:jsx-a11y/recommended', 'prettier', 'prettier/react'],
    plugins: ['jsx-a11y', 'prettier'],
    env: {
      jest: true
    },
    ignorePatterns: ['out/', 'storybook-static'],
    rules: {
      'indent': ['error', 2],
      'react/jsx-filename-extension': 0,
      'function-paren-newline': 0,
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'no-underscore-dangle': 0,
      'react/jsx-one-expression-per-line': 0,
      'import/no-cycle': 0,
      'react/jsx-max-props-per-line': [1, { maximum: 3, when: 'always' }],
      'react/jsx-indent-props': [2, 2],
      'array-callback-return': 0,
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'react/jsx-indent': ['error', 2],
      'react/jsx-closing-bracket-location': [2, 'after-props'],
      'semi': ['error', 'always']
    },
    settings: {
      'import/resolver': {
        node: {
          moduleDirectory: ['node_modules', '.']
        }
      }
    }
  };
  