module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: '2022',
    sourceType: 'module'
  },
  extends: [
    '@nuxt/eslint-config',
    'plugin:vue/vue3-recommended',
    'plugin:vuetify/base',
    'plugin:nuxt/recommended',
    // put 'plugin:prettier/recommended' last, to avoid conflicting configuration
    // note that 'plugin:prettier/recommended' extends 'prettier' and sets up the 'prettier' plugin 
    // see https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    'plugin:prettier/recommended',
    // NOTE: don't append here, 'plugin:prettier/recommended' should be last.
  ],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default', 'index', 'error', 'about', '[...slug]'],
      },
    ],
  },
}
