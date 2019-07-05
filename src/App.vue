<template>
  <div :style="{'background-image': `url(${selectedBgColor})`}"  id="app">
      <nav-bar></nav-bar>
      <white-box>
          <transition name="component-fade" mode="out-in">
              <router-view @spange-bob="open()"/>
          </transition>
      </white-box>
  </div>
</template>


<script>
  import NavBar from './components/NavBar'
  import WhiteBox from './components/WhiteBox'

  export default {
    name: "app",
    components: {
      NavBar,
      WhiteBox
    },
    computed: {
      selectedBgColor() {
        return this.$route.meta.bkImgUrl
      }
    },
    methods: {
      open() {
        this.$store.state.showModalWindow = true
        this.$store.state.blockScreen = true
      }
    }
  }
</script>

<style>
    @import 'assets/fonts/font-awesome.css';

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100vh;
        transition: 0.6s;
        background-size: cover;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .25s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>
