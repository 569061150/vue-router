<template>
  <div class="main11">
    <navbar></navbar>
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Sidebar from './sidebar'
  import Navbar from './Navbar'

  export default {
    name: "main",
    components: {Sidebar, Navbar},
    data() {
      return {
        user: ''
      }
    }
  }
</script>

<style>
  .item {
    height: 100%;
  }
</style>
