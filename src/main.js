import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from './http'

Vue.prototype.axios = axios 

new Vue({
  el: '#app',
  axios,//同上理
  router,//保证在实例上用到router
  store,//实现从根组件注入到所有子组件中
  render: h => h(App)
})
