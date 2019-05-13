import Vue from 'vue'
import router from './router/router'
import './config/rem'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

import {generaMenu} from '@/config/tools'
import admin_data from '@/plugins/admin_data'


Vue.use(Element)

// //防止刷新当前页面时动态路由还没挂在vue上出现空白页面，在挂载之前router.addRoutes(routerlist)

// 用户手动刷新页面，这是路由会被重设，要重新新增
// if (sessionStorage.getItem('user')) {
//   let routesData = JSON.parse(sessionStorage.getItem('routes'))
//   let routes = []
//   // generaMenu(router, routesData) // 将后台的路由数据components转化成组件
//   // router.addRoutes(routes)  // 添加路由
//   // router.push('/')
// }
//
// if(localStorage.getItem('role_router')){
//   let routerlist=[]
//   //这里是调用router.js里的方法拿到动态路由
//   Vue.prototype.ROUTER.getRouterList(function(data){
//     routerlist=data
//   })
//   //动态添加路由
//   router.addRoutes(routerlist)
// }

if (sessionStorage.getItem('user')) {

  let routes = []
  generaMenu(routes, admin_data) // 将后台的路由数据components转化成组件
  router.addRoutes([{
    name: 'mainS',
    path: "/",
    component: () => import(`@/components/defaut/main`),
    children: routes
  }])  // 添加路由
  router.push('/')

}
// 路由拦截器
// 登录状态判断
router.beforeEach((to, from, next) => {

  if (!!sessionStorage.getItem('user')) {
    if (to.path == '/login') {
      next({path: from.fullPath})
    } else {
      next()
    }
  } else {
    if (to.path == '/login') {
      next()
    } else {
      next('/login')
    }
  }
})

new Vue({
  router,
  store
}).$mount('#app')
