const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout/basic/BasicLayout.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/MainPage.vue'),
        meta: {
          title: '',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/home/MainPage.vue')
  }
]

export default routes
