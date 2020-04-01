export default [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Home.vue'),
      },
      {
        path: 'counter',
        component: () => import('pages/tools/CharacterCounter.vue'),
      },
      {
        path: 'generators/md5',
        component: () => import('pages/tools/MD5Generator.vue'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
]
