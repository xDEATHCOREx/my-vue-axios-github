import axios from 'axios'
import store from './store/store'
import router from './router'

//axios全局配置
axios.defaults.timeout = 5000
axios.defaults.baseURL = 'https://api.github.com'

//http request 拦截器
axios.interceptors.request.use(
	config => {
		if(store.state.token){
			console.log(`token ${store.state.token}`)
			config.headers.Authorization = `token ${store.state.token}`//给请求头加上token信息，此处写法应该是按照github API
		}
		return config
	},
	err =>{
		return Promise.reject(err)
	})

export default axios