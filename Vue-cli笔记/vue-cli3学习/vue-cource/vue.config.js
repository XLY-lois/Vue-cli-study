const BASE_URL = process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
