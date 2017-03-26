<template>
<div>
  <div >
    {{statuss}}
  </div>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      statuss:'app.vue'
    }
  }
}
</script>

<style lang="scss">

</style>
