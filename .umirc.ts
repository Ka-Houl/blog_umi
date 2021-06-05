import { defineConfig } from 'umi';
import pageRoutes from './config/router.config';
export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  ssr: {},

  history: {
    type: 'browser', //router类型
  },
  hash: true, //配置是否让生成的文件包含 hash 后缀
  devServer: {
    port: 9009,
    // https: true
  },
  dva: {
    immer: true,
    hmr: false,
    skipModelValidate: true,
  },
  title: 'KaHoul的个人博客',

  routes: pageRoutes,
  // outputPath: '/blog', //指定输出路径。  //FIXME:设置这个属性，会使webpack热更新失效
  chainWebpack(config, { webpack }) {
    config.optimization.splitChunks({
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        // vendors: {
        //   name: 'vendors',
        //   chunks: 'all',
        //   test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|lodash|lodash-decorators|redux-saga|re-select|dva|moment)[\\/]/,
        //   priority: -10,
        // },
        umi: {
          name: 'umi',
          chunks: 'all',
          test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
          priority: -11,
        },
      },
    });
  },
  //通过代理解决本地跨域
  proxy: {
    '/api': {
      target: 'http://blog_api.kahoul.top',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
    '/proxyDev': {
      // target: 'http://192.168.8.51:8080',
      target: 'https://sysu.yibaogao.com',
      // target: 'https://aizhushou.yibaogao.com',
      // target: 'http://sysu.yibaogao.com',    http协议会变成get请求？？？

      changeOrigin: true,
      pathRewrite: { '^/proxyDev': '' },
    },
  },
  // dynamicImport:true
  // publicPath: '/blog/'   //会添加打包前缀，在本地warmserver需要相应配置，线上不需要
});
