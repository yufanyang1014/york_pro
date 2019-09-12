module.exports = {
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8989,
    proxy: {
      '/api': {
        target: 'http://121.40.188.9:40000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '',
        },
      },
      '/data': {
        target: 'http://www.weather.com.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/data/': '',
        },
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: []
    }
  },
}
