// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

// 引入样式
import './common/stylus/index.styl'
Vue.config.productionTip = false
Vue.use(VueResource)

//  引入过滤器
import filters from './filters'
Vue.use(filters)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
