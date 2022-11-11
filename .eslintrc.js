module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
  ],
  parser: 'vue-eslint-parser',
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    semi: 0,
    camelcase: 0,
    'global-require': 0,
    'max-len': 0,
    'consistent-return': 0,
    'default-param-last': 0,
    'prefer-destructuring': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-undef': 0,
    'no-lonely-if': 0,
    'no-return-await': 0,
    'no-unused-vars': 0,
    'no-multi-assign': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'no-restricted-globals': 0,
    'no-unused-expressions': 0,
    'no-mixed-operators': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'vue/no-v-html': 0,
    'vue/prop-name-casing': 0,
    'vue/no-mutating-props': 0,
    'vue/no-deprecated-slot-attribute': 0,
    'vue/no-deprecated-v-on-native-modifier': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
};