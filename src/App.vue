<template>
  <div :style="{'background-color': selectedBgColor}"  id="app">
      <nav-bar></nav-bar>
      <router-view/>
  </div>
</template>


<script>
  import NavBar from './components/NavBar'

  export default {
    name: "app",
    components: {NavBar},
    computed: {
      selectedBgColor() {
        if (this.$route.path === '/home') return "#3EAF6F"
        return this.$route.meta.bkColor
      }
    }
  }
</script>


<style>
    @import 'assets/fonts/font-awesome.css';

    * {
        margin: 0px;
        padding: 0px;
    }

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100vh;
    }
</style>
