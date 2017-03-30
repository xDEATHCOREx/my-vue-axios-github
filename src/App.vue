<template>
<div>
  <div class="nav">
  <el-button v-on:click="logOut" v-show="token" class="logout-btn">LogOut</el-button>
    <p>Welcome! {{userName}}</p>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
//当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键：
import {mapState} from 'vuex'// 在单独构建的版本中辅助函数为 Vuex.mapState
export default {
  name: 'app',
  data () {
    return {
      statuss:'app.vue'
    }
  },
  computed:mapState({
    userName :'userName',
    token : 'token',  // 传字符串参数 'token' 等同于 `state => state.token`
  }),
  methods:{
    logOut(){
       this.$confirm('Confirm to logout?', '提示', {
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'already logout'
          });
          this.$store.commit('logOut')
          this.$router.push({
            path : '/'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'action canceled.'
          });          
        });
    
    }
  }
}
</script>

<style lang="scss">
  html,body{
    margin: 0;
    padding: 0;
  }
  .nav{
    box-sizing: border-box;
    padding-left:10px;
    width: 100%;
    height: 50px;
    background-color: #1D8CE0;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    align-items:center;
    justify-content:space-between;
  }
  .logout-btn{
  }
</style>
