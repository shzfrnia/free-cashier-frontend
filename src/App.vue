<template>
  <div style="background-repeat: round" :style="{'background-image': `url(${selectedBgColor})`}"  id="app">
      <nav-bar></nav-bar>
      <white-box>
          <transition name="component-fade" mode="out-in">
              <router-view/>
          </transition>
      </white-box>
  </div>
</template>


<script>
  import NavBar from './components/NavBar'
  import WhiteBox from './components/WhiteBox'

  export default {
    name: "app",
    beforeCreate() {
      this.$router.push({name: 'tables'})
    },
    components: {
      NavBar,
      WhiteBox
    },
    computed: {
      selectedBgColor() {
        // if (this.$route.path === '/home') return "#3EAF6F"
        // return this.$route.meta.bkColor
        //if (this.$route.path === '/home') return "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/B1eYNZGrripnnry82/videoblocks-table-at-restaurant-blurred-background_rxthbuitx_thumbnail-full01.png"
        return this.$route.meta.bkImgUrl
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
        transition: 0.7s;
    }


    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .25s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>
