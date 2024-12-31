// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'vue3',
        ts: true,
        compiler: 'vite'
      }
    ]
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        root: ['./src'], // 设置根目录
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils'
          // 可以根据需要添加更多别名
        }
      }
    ]
  ]
}
