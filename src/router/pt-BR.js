export default [
  {
    path: '/',
    name: 'home__pt-BR',
    component: () => import(/* webpackChunkName: "page-home" */ '@/pages/Home'),
    meta: {
      layout: 'home'
    }
  },
  {
    path: '/sobre-a-nyx',
    name: 'about__pt-BR',
    component: () => import(/* webpackChunkName: "page-about" */ '@/pages/About')
  },
  {
    path: '/planos',
    name: 'plans__pt-BR',
    component: () => import(/* webpackChunkName: "page-plans" */ '@/pages/Plans')
  },
  {
    path: '/trabalhe-conosco',
    name: 'work-us__pt-BR',
    component: () => import(/* webpackChunkName: "page-work-us" */ '@/pages/WorkUs')
  },
  {
    path: '/contato',
    name: 'contact__pt-BR',
    component: () => import(/* webpackChunkName: "page-contact" */ '@/pages/Contact')
  }
]
