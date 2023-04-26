module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/strongly-recommended', 'eslint:recommended', 'prettier'],
  plugins: ['vue'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 7,
    sourceType: 'module',
  },
  rules: {
    // 'vue/attribute-hyphenation': 2,
    // 'vue/html-end-tags': 2,
    // 'vue/html-quotes': 2,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'any',
          component: 'any',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index', 'main'], //需要忽略的组件名
      },
    ],
    // 'vue/no-template-shadow': 2,
    'vue/prop-name-casing': 2,
    // 'vue/require-default-prop': 2,
    // 'vue/v-bind-style': 2,
    // 'vue/v-on-style': 2,
    'vue/attributes-order': 2,
    'vue/no-v-html': 'off',
    'vue/this-in-template': 2,
    'vue/use-v-on-exact': 2,
    'vue/return-in-computed-property': 2,
    'vue/comment-directive': 2,
    'vue/jsx-uses-vars': 2,
    'vue/max-attributes-per-line': 2,
    'vue/name-property-casing': 1,
    // 'vue/no-multi-spaces': 1,
    // 'vue/require-prop-types': 1,
    'vue/order-in-components': 1,
    // 强烈推荐
    'vue/component-definition-name-casing': 0,
    'vue/first-attribute-linebreak': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/html-indent': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': 0,
    'vue/no-spaces-around-equal-signs-in-attribute': 0,
    'vue/one-component-per-file': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/v-slot-style': 0,
    // 新增vue
    'vue/max-len': [1, 120],

    // eslint本身的
    'prefer-const': 2,
    // 'max-len': 2,// 用Vue的
    'arrow-body-style': [1],
    'arrow-parens': [1, 'as-needed'],
    'array-callback-return': 1,
    'prefer-template': 2,
    'no-else-return': 1,
    'comma-spacing': 2,
    'eol-last': 2,
    'newline-per-chained-call': 1,
    'spaced-comment': 2,
    'no-trailing-spaces': 2,
    'object-shorthand': 1,
    'no-param-reassign': 1,
    // 'wrap-iife': 2,
    // 'no-nested-ternary': 1,
    'eqeqeq': 1,
    'prefer-destructuring': 1,
    'no-restricted-syntax': 1,
    'no-underscore-dangle': 1,
    // 'indent': 1, // 缩进报错
    'key-spacing': 2,
    'comma-dangle': [1, 'always-multiline'],
    // 'title-required': 1, // 莫名报错
    // 'tag-pair': 1, // template报错
    'operator-linebreak': 2,
    'no-plusplus': 2,
    'no-catch-shadow': 2,
    'max-params': 2,
    'func-names': 2,
    'guard-for-in': 2,
    // 'max-statements': 2, // 不符合开发要求
    'no-restricted-syntax': 1,
    'no-continue': 2,
    'prefer-promise-reject-errors': 2,
    // 'dot-notation': 1, //不符合开发要求
  },
}
