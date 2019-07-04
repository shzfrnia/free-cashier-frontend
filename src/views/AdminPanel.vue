<template>
    <div class="container">
        <admin-form></admin-form>
    </div>
</template>

<script>
    import AdminForm from '../components/AdminForm'

  export default {
    name: "AdminPanel",
    components: {
      AdminForm
    }
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