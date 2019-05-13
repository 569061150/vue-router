import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '*',
    name: '404',
    redirect: "/404"
  }, {
    path: '/login',
    name: 'login',
    component: () => import(`@/components/defaut/login`)
  }, {
    path: '/404',
    name: '404',
    component: () => import(`@/components/defaut/404`)
  }
    // ,{
    //   path: '/main',
    //   name: 'main',
    //   component: () => import(`@/components/defaut/main`),
    //   children: [{
    //     path: '/menu1/menu1_item1',
    //     name: 'menu1_item1',
    //     component: () => import(`@/page/menu1/menu1_item1`)
    //   }, {
    //     path: '/menu1/menu1_item2',
    //     name: 'menu1_item2',
    //     component: () => import(`@/page/menu1/menu1_item2`)
    //   }, {
    //     path: '/menu1/menu1_item3',
    //     name: 'menu1_item3',
    //     component: () => import(`@/page/menu1/menu1_item3`)
    //   }, {
    //     path: '/menu1/menu1_item4',
    //     name: 'menu1_item4',
    //     component: () => import(`@/page/menu1/menu1_item4`)
    //   }, {
    //     path: '/menu1/menu1_item5',
    //     name: 'menu1_item5',
    //     component: () => import(`@/page/menu1/menu1_item5`)
    //   }, {
    //     path: '/menu1/menu1_item6',
    //     name: 'menu1_item6',
    //     component: () => import(`@/page/menu1/menu1_item6`)
    //   }, {
    //     path: '/menu1/menu1_item7',
    //     name: 'menu1_item7',
    //     component: () => import(`@/page/menu1/menu1_item7`)
    //   }, {
    //     path: '/menu2/menu2_item1',
    //     name: 'menu2_item1',
    //     component: () => import(`@/page/menu2/menu2_item1`)
    //   }, {
    //     path: '/menu2/menu2_item2',
    //     name: 'menu2_item2',
    //     component: () => import(`@/page/menu2/menu2_item2`)
    //   }, {
    //     path: '/menu2/menu2_item3',
    //     name: 'menu2_item3',
    //     component: () => import(`@/page/menu2/menu2_item3`)
    //   }, {
    //     path: '/menu3/menu3_item1',
    //     name: 'menu3_item1',
    //     component: () => import(`@/page/menu3/menu3_item1`)
    //   }, {
    //     path: '/menu3/menu3_item2',
    //     name: 'menu3_item2',
    //     component: () => import(`@/page/menu3/menu3_item2`)
    //   }, {
    //     path: '/menu3/menu3_item3',
    //     name: 'menu3_item3',
    //     component: () => import(`@/page/menu3/menu3_item3`)
    //   }, {
    //     path: '/menu4/menu4_item1',
    //     name: 'menu4_item1',
    //     component: () => import(`@/page/menu4/menu4_item1`)
    //   }, {
    //     path: '/menu4/menu4_item2',
    //     name: 'menu4_item2',
    //     component: () => import(`@/page/menu4/menu4_item2`)
    //   }, {
    //     path: '/menu4/menu4_item3',
    //     name: 'menu4_item3',
    //     component: () => import(`@/page/menu4/menu4_item3`)
    //   },, {
    //     path: '/menu4/menu4_item4',
    //     name: 'menu4_item4',
    //     component: () => import(`@/page/menu4/menu4_item4`)
    //   }, {
    //     path: '/menu4/menu4_item5',
    //     name: 'menu4_item5',
    //     component: () => import(`@/page/menu4/menu4_item5`)
    //   }

  ]

})


