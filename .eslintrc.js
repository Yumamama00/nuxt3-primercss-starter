module.exports = {
  root: true,
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
  ],
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'no-console': 'off',
    'no-undef': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/valid-attribute-name': 'off',
    'vue/valid-model-definition': 'off',
  },
}
