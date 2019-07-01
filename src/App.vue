<template>
  <div :style="{'background-color': selectedBgColor}"  id="app">
      <nav-bar></nav-bar>
      <transition name="component-fade" mode="out-in">
      <router-view/>
      </transition>
  </div>
</template>


<script>
  import NavBar from './components/NavBar'

  export default {
    name: "app",
    beforeCreate() {
      this.$router.push({name: 'tables'})
    },
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
        transition: 0.4s;
    }


    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .15s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>
