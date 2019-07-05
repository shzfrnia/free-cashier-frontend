<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: "AdminPanel",
  }
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

</style>