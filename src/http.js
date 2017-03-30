import axios from 'axios'
import store from './store/store'
import router from './router'

//axios全局配置
axios.defaults.timeout = 10000
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
		console.warn(err)
		return Promise.reject(err)
	})
axios.interceptors.response.use(
	response=>{
		return response
	},
	err =>{
		if(err.response){
			console.log(err)
			switch(err.response.status){
				case 401:
					console.log("401 detected")
					store.commit('logOut')//清除错误token
					//重定向到登录页面
					router.replace({//跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。
						path:'/login',
						query:{redirect: router.currentRoute.fullPath}//这里带上登录后目的页的路径
					})
					console.warn(router.currentRoute.fullPath)
					
			}
		}
		return Promise.reject(err.response.data)
	})
export default axios