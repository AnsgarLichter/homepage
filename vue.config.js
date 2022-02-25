module.exports = {
  publicPath: "/homepage/",
  chainWebpack: (config) => {
    config.module.rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader').loader('file-loader').end();
  }
};