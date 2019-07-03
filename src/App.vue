<template>
  <div :style="{'background-image': `url(${selectedBgColor})`}"  id="app">
      <transition name="bounce">
        <modal-window v-if="showWindowDialog">
            <component :is="$store.state.modalWindowName"></component>
        </modal-window>
      </transition>

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
  import ModalWindow from './components/ModalWindow'
  import ReservationForm from './components/ReservationForm'
  import GoogleMap from './components/GoogleMap'

  export default {
    name: "app",
    beforeCreate() {
      this.$router.push({name: 'tables'})
    },
    components: {
      NavBar,
      WhiteBox,
      ModalWindow,
      ReservationForm,
      GoogleMap
    },
    data() {
      return {
        modal: this.$store.state.showModalWindow
      }
    },
    computed: {
      selectedBgColor() {
        return this.$route.meta.bkImgUrl
      },
      showWindowDialog () {
        return this.$store.state.showModalWindow
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

<!--BOUNCE ANIMATION-->
<style scoped>
    .bounce-enter-active {
        animation: bounce-in .7s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.20);
        }
        100% {
            transform: scale(1);
        }
    }

</style>

<style>
    @import 'assets/fonts/font-awesome.css';

    * {
        margin: 0px;
        padding: 0px;
    }

    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100vh;
        transition: 0.7s;
        background-repeat: round;
        background-size: 100%;
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .25s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>
