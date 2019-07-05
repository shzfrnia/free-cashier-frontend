<template>
    <div class="main">
        <div class="nav">
            <router-link
                    v-for="(r, index) in tabs"
                    class="nav-item"
                    :key="index"
                    :to="r.path">
                {{r.displayName}}
            </router-link>
            <div id="logout-btn" class="nav-item" @click="logOut">LogOut</div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

  export default {
    name: "AdminMenu",
    data() {
      return {
        tabs: [
          {
            displayName: 'Бронирование стола',
            componentName: 'reservation-form-admin',
            path: '/admin/'
          },
          {
            displayName: 'Бронирования',
            componentName: 'reservations',
            path: '/admin/reservations'
          },
          {
            displayName: "Столы",
            componentName: 'tables',
            path: '/admin/tables'
          }
        ],
      }
    },
    methods: {
      async logOut() {
        await this.$store.dispatch('logOut')
        this.$router.push('/admin/login')
      }
    }
  }
</script>

<style scoped>
    #logout-btn {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding-bottom: 10px;
    }


    .main {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .nav {
        min-width: 270px;
        background: #c1c1c1;
        margin: -20px;
        position: relative;
    }

    .nav-item {
        text-align:left;
        padding: 10px 10px 0 10px;
        font-size: 20px;
        display: block;
        text-decoration: none;
        color: black;
    }


    .nav-item:hover {
        background: cornflowerblue;
    }
    
    .content {
        width: 100%;
        display: flex;
        margin: -20px;
        background: white;
        position: relative;
    }

    .router-link-exact-active {
        background: #CC8602;
    }

</style>