// vue.config.js file to be placed in the root of your repository

// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/luckydiamond/'
//     : '/'
// }

// module.exports = {
//   publicPath: '/'
// }

const path = require('path');

module.exports = {
  // Установка базового URL-адреса для проекта
  publicPath: '/',
  productionSourceMap: false,
  // Настройка Webpack
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'), // Настройка алиаса '@' для каталога 'src/'
      }
    }
  }
};
