export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/', component: '@/pages/index' },
      { path: '/user', component: '@/pages/user' },
    ],
  },
  { path: '/about', component: '@/pages/about' },
  { component: '@/pages/404' },
];
