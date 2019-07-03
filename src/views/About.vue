<template>
  <div class="about">
      <contact-info></contact-info>
  </div>
</template>

<script>
    import ContactInfo from '../components/ContactInfo'

  export default {
    name: "about",
    components: {
      ContactInfo
    },
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
        outline: none;
        border: none;
    }


    .active {
      background: red;
    }
</style>
