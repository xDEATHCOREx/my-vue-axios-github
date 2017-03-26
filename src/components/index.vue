<template>
<div>
	<div>{{status}}</div>
	<router-link :to="{path:'/repository'}">
		View your repositories
	</router-link>
</div>
</template>
<script>
	export default {
		data(){
			return {
				status : 'index',
			}
		}
	}	
</script>
<style type="text/css">
	
</style>