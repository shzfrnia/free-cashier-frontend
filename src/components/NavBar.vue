<template>
    <div id="nav">
        <div class="my-btn-container">
            <router-link :key="route.icon" :to="route.route" v-for="route in routes">
                <div class="my-btn" :key="route.icon">
                    <i :style="{color: route.bkColor}" :class="['fas', `fa-${route.icon}`]"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        routes: [
          {
            icon: 'utensils',
            route: '/tables',
            bkColor: 'rgb(203, 128, 56)'
          },
          {
            icon: 'address-card',
            route: '/about',
            bkColor : 'rgb(108, 114, 208)'
          }
        ]
      }
    },
    computed: {
      hotFixRoute() {
        return this.$route.path !== '/'
      }
    }
  }
</script>

<style scoped>
    .my-btn-container {
        position: relative;
    }

    .my-btn {
        display: inline-block;
        cursor: pointer;
        width: 50px;
        height: 50px;
        margin: 5px;
        font-size: 25px;
        color: gray;
        border-radius: 25px;
        background-color: white;
        text-align: center;
        line-height: 50px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        transition: 0.5s;
    }
    .router-link-active .my-btn{
        width: 80px;
        box-shadow: 0 0 25px rgb(255, 255, 255);
    }
</style>