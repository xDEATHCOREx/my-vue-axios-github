import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './components/index.vue'
import repository from './components/repository.vue'
import login from './components/login.vue'
import store from './store/store'
Vue.use(VueRouter)

const routes = [
	{
		path:'/',
		name:'index',
		component:index
	},
	{
		path:'/repository',
		name:'repository',
		component:repository,
		meta:{
			requireAuth:true,
		}
	},
	{
		path:'/login',
		name:'login',
		component:login
	}
]

let tokenLS = localStorage.getItem('token')
if(tokenLS){
	console.warn("tokenLS existed,automatic logging in...")
	store.commit('logIn',tokenLS)
}

const router = new VueRouter({
	routes
});

router.beforeEach((to,from,next)=>{
	if(to.matched.some(r=>r.meta.requireAuth)){
		if(store.state.token){
			next();
		}else{
			next({
				path:'/login',
				query:{redirect: to.fullPath}// 将跳转的路由path作为参数，登录成功后跳转到该路由，如/login?redirect=%2Frepository
			})
		}
	}
	else {
		next();
	}
});

export default router;