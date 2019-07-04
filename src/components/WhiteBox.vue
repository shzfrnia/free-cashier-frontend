<template>
    <div :style="{'box-shadow': '0 0 10px ' + dynamicSnadow}" class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "WhiteBox",
    computed: {
      dynamicSnadow() {
        return this.$route.meta.bkColor
      }
    }
  }
</script>

<style scoped>
    .wrapper {
        border-radius: 10px;
        background: white;
        opacity: 0.92;
        overflow: auto;
        padding: 20px;
        width: 60%;
        margin: 10px auto;
        height: 80vh;
        box-shadow: 0 0 10px rgb(255, 255, 255);
    }

    .content {
        height: 100%;
    }
</style>