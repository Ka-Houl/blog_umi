import { defineConfig } from 'umi';
import pageRoutes from './config/router.config';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash', //router类型
  },
  routes: pageRoutes,
  outputPath: './blog', //指定输出路径。
  // publicPath: '/blog/'   //会添加打包前缀，在本地warmserver需要相应配置，线上不需要
});
