<template>
<div>
	<div class="indexWrap">
		<router-link :to="{path:'/repository'}">
			<el-button type="primary" class="viewBtn">View your repositories</el-button>
		</router-link>
	</div>
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
	.indexWrap{
		text-align: center;
		margin: 20px 0;
	}
	.viewBtn{
	
	}
</style>