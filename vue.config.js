
const {NODE_ENV} = process.env;
console.log(NODE_ENV);
const publicPath =  NODE_ENV==='production'? '//www.hzyork.com': '/';


module.exports = {
  devServer: {
    publicPath,
    open: true,
    proxy: {
      '/api': {
        target: 'http://121.40.188.9:40000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api/': '',
        },
        cookiePathRewrite: {
          '/': '/api/',
        },
      },
      '/data': {
        target: 'http://www.weather.com.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/data/': '',
        },
        cookiePathRewrite: {
          '/': '/data/',
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
