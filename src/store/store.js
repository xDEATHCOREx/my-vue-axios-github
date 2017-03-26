import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
	state:{
		user:{},
		token:null,
		title:''
	},
	mutations:{
		logIn:(state,data)=>{
			localStorage.token = data;//token存进LS
			state.token = data;//同样存进store的state中
		},
	}
})

export default store