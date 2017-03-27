<template>
<div>
	<form @submit.stop.prevent="login" class="form">
		<el-input  
			:type="inputType"
			placeholder="Please input ur Github Personal Token"
	  		icon="more" 
	  		:on-icon-click="displayChange"
	  		v-model="token">
	  	</el-input>
	</form>
</div>
</template>
<script>
import {mapState} from 'vuex'
	export default {
		data(){
			return {
				status : 'login',
				token:'',
				inputType:"password"
			}
		},
		mounted(){
			this.checkLogInState()
		},
		computed:mapState({
			logIn:'logIn',//记录了vuex store中的登录态
		}),
		methods:{
				login(){
					console.log("submit to LOGIN")
					if(this.token){
						this.$store.commit('logIn',this.token)
						let redirect = decodeURIComponent(this.$route.query.redirect || '/')//取得由router.js中配置好的登录后跳转路由的query参数
						this.$router.push({
							path: redirect
						})
					}else{
						console.warn("input TOKEN")
					}
			},
			checkLogInState(){
				console.warn("checking login state",this.logIn)
				if(this.logIn){
					console.info("logged in,redirecting..")
					this.$router.replace({
						path:'/repository'
					})
				}
			},
			displayChange(event){		
				if(this.inputType=='password'){	
					this.inputType = 'text'
				}else{this.inputType='password'}
			}
		}

	}	
</script>
<style type="text/css">
	.form{
		width: 400px;
		margin: 0 auto;
	}
</style>