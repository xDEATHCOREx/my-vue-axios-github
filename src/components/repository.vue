<template>
	<div v-loading="loading2"  element-loading-text="Please wait a second" >
		<div style="text-align: center" v-if="!logIn">
			<i class="el-icon-loading loading" ></i>
		<strong class="notice">Please wait a second</strong>
		</div>
	<ul id="lists">
	<li v-for="list in lists" >
  			<el-card class="box-card" >
  			<div class="header">
  			<img :src="list.owner.avatar_url" alt="avatar">
	 		<div class="detail">
	 			<div class="title">
	 			<span class="owner">{{list.owner.login}}</span><p class="name">{{list.name}}</p> </div>
	 			<div class="desc">{{list.description}}</div>
			</div>
			</div>
			<div class="footer">
				<div class="lang">
					<i v-if="list.language" class="el-icon-edit"></i>
					{{list.language}}
				</div>
				<a :href="list.html_url">
					<el-button type="primary" class="detailBtn">Detail</el-button>
				</a>
				<div class="date">
					<i class="el-icon-date"></i>
					{{list.updated_at}}	
				</div>
			</div>	
			</el-card>

	</li>
	</ul>
	</div>
</template>
<script>
	import {fetch} from '../http'
	import {mapState} from 'vuex'
	export default {
		data(){
			return {
				status : 'repository',
				lists:[],//存放接口返回数据的数组
				loading2:true
			}
		},
		mounted(){
			this.getRepository()
		},
		computed:mapState({
			logIn:'logIn',//记录了vuex store中的登录态
		}),
		methods:{
			getRepository(){
				let params ={
					sort : 'updated'
				}
				this.axios.get('/user/repos',params).then(res =>{
					this.$store.commit('setUserName',res.data[0].owner.login)
					this.$store.commit('success')
					this.lists = res.data
					this.loading2 = false
					 this.$message({
				          type:'success',
				          message: 'Log in success!'
				        });
				},res=>{//捕捉超时等错误
					console.warn("false")
					 this.$message.error('Wrong Token');
					 this.$store.commit('logOut')
				})
			}
		}
	}	
</script>
<style  type="text/css">
	.name{
		margin:0;
		display: inline-block;
		position: absolute;
		right: 0px;
	}
	.loading{
		display: inline-block;
		margin: 0 auto;
	}
	.notice{
		display: block;
	}
	.header{
		display: flex;
	}
	.el-card{
		transition: all .4s cubic-bezier(.25,.8,.25,1)
	}
	.el-card:hover{
		cursor: pointer;
		box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
	}
	.el-card__body{
		padding: 10px;
	}
	 .detailBtn{
		position: absolute;
    	top: 50%;
    	left: 50%;
    	margin-top: -18px!important;
    	margin-left: -34px!important;
    	 -webkit-box-shadow: 0 0 0 -4px #fff, 0 0 0 -1px #fff;
  		box-shadow: 0 0 0 -4px #fff, 0 0 0 -1px #fff;
  		-webkit-transition: -webkit-box-shadow .3s;
  		transition: box-shadow .3s;
	}
	.detailBtn:hover,.detailBtn:focus{
	  background-color: #20a0ff!important;
	  border-color: #20a0ff!important;
	  -webkit-box-shadow: 0 0 0 2px #fff, 0 0 0 4px #20a0ff;
	  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #20a0ff;
	  -webkit-transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
	  transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
	  -webkit-animation: gelatine 0.5s 1;
	  animation: gelatine 0.5s 1;	
	}
	.detail{
		flex: 1;
		position: relative;
	}
	.owner{
		font-size: 14px;
		line-height: 100%;
	}
	.title{
		font-size: 24px;	
	}
	.desc{
		opacity: .50;
	}
	.footer{
		font-size: 14px;
		margin-top: 30px;
		margin-bottom: 5px;
		position: relative;
		display: flex;
		justify-content: space-between;
	}
	.lang{
	}
	.date{
		
	}
	ul{

	}
	li{
		width: 600px;
		margin:30px auto;
		list-style: none;
	}
	img{
		width: 80px;
		height: 80px;
		margin-right: 20px;
	}

	/**
 * $keyframes \ gelatine //定义了动画的关键帧
 **/
@keyframes gelatine {
  from, to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }

  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }

  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }

  from, to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }

  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }

  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }
}
@-webkit-keyframes gelatine {
  from, to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }

  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }

  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }

  from, to {
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
  }

  25% {
    -webkit-transform: scale(0.9, 1.1);
    transform: scale(0.9, 1.1);
  }

  50% {
    -webkit-transform: scale(1.1, 0.9);
    transform: scale(1.1, 0.9);
  }

  75% {
    -webkit-transform: scale(0.95, 1.05);
    transform: scale(0.95, 1.05);
  }
}
</style>