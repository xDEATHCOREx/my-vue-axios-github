import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from './http'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// 将axios 挂载到prototype上，在组件中可以直接使用this.axios访问!!重要！！
Vue.prototype.axios = axios 
Vue.use(ElementUI)

new Vue({
  el: '#app',
  axios,//同上理
  router,//保证在实例上用到router
  store,//实现从根组件注入到所有子组件中
  ElementUI,
  render: h => h(App)
})
