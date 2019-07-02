<template>
  <div :style="{'background-image': `url(${selectedBgColor})`}"  id="app">
      <transition name="bounce">
        <modal-window @submit="modal=false" v-if="modal">
            <reservation-form></reservation-form>
        </modal-window>
      </transition>
      <nav-bar></nav-bar>
      <white-box>
          <transition name="component-fade" mode="out-in">
              <router-view @spange-bob="modal=true"/>
          </transition>
      </white-box>
  </div>
</template>


<script>
  import NavBar from './components/NavBar'
  import WhiteBox from './components/WhiteBox'
  import ModalWindow from './components/ModalWindow'
  import ReservationForm from './components/ReservationForm'

  export default {
    name: "app",
    beforeCreate() {
      this.$router.push({name: 'tables'})
    },
    components: {
      NavBar,
      WhiteBox,
      ModalWindow,
      ReservationForm
    },
    data() {
      return {
        modal: true
      }
    },
    computed: {
      selectedBgColor() {
        return this.$route.meta.bkImgUrl
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
