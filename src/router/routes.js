import enUS from './en-US'
import ptBR from './pt-BR'

export default [
  ...ptBR,
  ...enUS,
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "page-not-found" */ '@/pages/NotFound'),
    props: true
  }
]
