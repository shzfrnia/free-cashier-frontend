<template>
    <div id="nav">
        <div class="my-btn-container">
            <router-link :to="{name:'tables'}">
                <div class="my-btn">
                    <i style="color: rgb(203, 128, 56);" class="fas fa-utensils"></i>
                </div>
            </router-link>
            <router-link :to="{name:'about'}">
                <div class="my-btn">
                    <i style="color: rgb(108, 114, 208);" class="fas fa-address-card"></i>
                </div>
            </router-link>
            <router-link :to="{name:'admin'}">
                <div class="my-btn">
                    <i :style="{'color': authColor}" class="fas fa-user"></i>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "NavBar",
    computed: {
      authColor() {
        return this.$store.getters.isAuthenticated ? 'red' : 'gray'
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