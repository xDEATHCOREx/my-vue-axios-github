<template>
	<div>{{status}}{{list}}</div>
</template>
<script>
	import {fetch} from '../http'
	export default {
		data(){
			return {
				status : 'repository',
				list:[]//存放接口返回数据的数组
			}
		},
		mounted(){
			this.getRepository()
		},
		methods:{
			getRepository(){
				let params ={
					sort : 'updated'
				}
				this.axios.get('/user/repos',params).then(res =>{
					this.list = res.data
				})
			}
		}
	}	
</script>
<style type="text/css">
	
</style>