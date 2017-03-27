import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		userName:'',
		token:null,
		title:'',
		logIn:false,
	},
	mutations:{
		logIn:(state,token)=>{
			localStorage.token = token//token存进LS
			state.token = token//同样存进store的state中
			console.info("logged in")
		},
		logOut:(state)=>{
			localStorage.removeItem('token')
			state.token = null 
			state.userName = ''
			state.logIn = false
			console.info("logged in?",state.logIn)
		},
		setUserName:(state,data)=>{
			state.userName = data
		},
		success:(state)=>{
			state.logIn = true
		}
	}
})

export default store