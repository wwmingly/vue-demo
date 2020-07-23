// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true, // 本文件为根文件，禁止往上级查找
  parserOptions: {
    parser: 'babel-eslint', // 指定eslint解析器
    // sourceType:'script' // sourceType用来指定js导入的方式
  },
  env: {
    browser: true, //此项指定环境的全局变量，下面的配置指定为浏览器环境
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    // 'standard'  // 这个eslint 规则，暂时去除
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
