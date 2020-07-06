import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    // { path: '/', component: '@/pages/index/index' },
    // { path: '/self', component: '@/pages/self/index' },
    // { path: '/github', component: '@/pages/github/index' },
    // { path: '/index', component: '@/pages/index/index' },
  ],
});
