<template>
    <div class="container">
        <component :is="currentTab"></component>
    </div>
</template>

<script>
    import AdminLogin from '../components/Admin/AdminLogin'
    import AdminMenu from '../components/Admin/AdminMenu'

  export default {
    name: "AdminPanel",
    components: {
      AdminLogin,
      AdminMenu
    },
    data() {
      return {
        tabs: [
          {
            componentName: 'admin-login',
            displayName: 'admin login'
          },
          {
            componentName: 'admin-menu',
            displayName: 'Admin Menu'
          }
        ]
      }
    },
    computed: {
      currentTab() {
        return this.$store.getters.isAuthenticated ? this.tabs[1].componentName : this.tabs[0].componentName
      }
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