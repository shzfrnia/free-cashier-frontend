<template>
    <div class="containter">
        <div :key="i" v-for="i in foo" class="row">
            {{i}}
        </div>
    </div>
</template>

<script>
  export default {
    name: "Reservation",
    data() {
      return {
        foo: [
            1,2,3,4,5,6,7
        ]
      }
    }
  }
</script>

<style scoped>
    .containter {
        width: 100%;
        overflow: auto;
    }

    .row {
        margin: 1px;
        background: gray;
        height: 50px;
        border-radius: 40px;
    }
</style>