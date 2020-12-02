module.exports = {
  productionSourceMap: false,  
  outputDir: '../dist',
  assetsDir: 'static',
  indexPath: 'templates/index.html',
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
