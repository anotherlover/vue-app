import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)
export default new Router({
  linkActiveClass: 'active', // 当路由被激活时，会添加对应的样式，再集中设置被激活的标签样式
  routes
})
