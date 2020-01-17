export default [
  {
    path: '/',
    name: 'home__en-US',
    component: () => import(/* webpackChunkName: "page-home" */ '@/pages/Home'),
    meta: {
      layout: 'home'
    }
  },
  {
    path: '/about',
    name: 'about__en-US',
    component: () => import(/* webpackChunkName: "page-about" */ '@/pages/About')
  },
  {
    path: '/plans',
    name: 'plans__en-US',
    component: () => import(/* webpackChunkName: "page-plans" */ '@/pages/Plans')
  },
  {
    path: '/work-us',
    name: 'work-us__en-US',
    component: () => import(/* webpackChunkName: "page-work-us" */ '@/pages/WorkUs')
  },
  {
    path: '/contact',
    name: 'contact__en-US',
    component: () => import(/* webpackChunkName: "page-contact" */ '@/pages/Contact')
  }
]
