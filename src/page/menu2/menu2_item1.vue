<template>
  <div class="item">
    <h1 style="margin-top: 30px;margin-left: 400px; color: cornflowerblue">menu2-item1</h1>
    <el-button @click="go">默认按钮</el-button>
    {{pk_refinfo}} : {{value}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pk_refinfo: "",
        value: ""
      }
    },
    methods: {
      go() {
        this.$router.push({name: '/menu2/menu2_item2', params: {pk_refinfo: 'menu2_item2', value: 'menu2_item2'}});
      }
    },
    mounted() {
      this.pk_refinfo = this.$route.params.pk_refinfo
      this.value = this.$route.params.value
    }
  }
</script>

<style scoped>
  .item {
    position: fixed;
    top: 61px;
    left: 200px;
  }
</style>
