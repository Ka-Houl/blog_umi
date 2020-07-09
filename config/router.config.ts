const routerConfig: any = [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/index/index' },
      { path: '/self', component: '@/pages/self/index' },
      { path: '/github', component: '@/pages/github/index' },
      { path: '/sort', component: '@/pages/sort/index' },
    ],
  },
  // { path: '/', component: '@/pages/index' },
  // { path: '/self', component: '@/pages/self/index' },
  // { path: '/github', component: '@/pages/github/index' },
  // { path: '/index', component: '@/pages/index/index' },
];

export default routerConfig;
