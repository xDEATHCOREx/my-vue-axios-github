<template>
<div>
	<div>{{status}}</div>
	<form @submit.stop.prevent="login">
		<input 
			type="" 
			v-model="token"
			></input>
		<label>Please input ur Github Personal Token</label>
	</form>
</div>
</template>
<script>
	export default {
		data(){
			return {
				status : 'login',
				token:''
			}
		},
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
			}
		}

	}	
</script>
<style type="text/css">

</style>