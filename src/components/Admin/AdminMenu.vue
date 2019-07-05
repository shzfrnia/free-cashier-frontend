<template>
    <div class="main">
        <div class="nav">
            <router-link
                    v-for="(r, index) in tabs"
                    class="nav-item"
                    :key="index"
                    :to="r.path">
                <i :class="['fab', `fa-${r.icon}`]"></i>
                {{r.displayName}}
            </router-link>
            <div id="logout-btn" class="nav-item" @click="logOut">
                <i class="fas fa-sign-out-alt fa-rotate-180"></i>
                Logout
            </div>
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
            path: '/admin/',
            icon: 'gitter'
          },
          {
            displayName: 'Бронирования',
            componentName: 'reservations',
            path: '/admin/reservations',
            icon: 'stack-exchange'
          },
          {
            displayName: "Столы",
            componentName: 'tables',
            path: '/admin/tables',
            icon: 'osi'
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
        cursor: pointer;
    }


    .main {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .nav {
        min-width: 240px;
        z-index: 1;
        box-shadow: 0 0 4px black;
        margin: -20px 0 -20px -20px;
        position: relative;
    }

    .nav-item {
        text-align:left;
        padding: 10px;
        font-size: 20px;
        display: block;
        text-decoration: none;
        color: #333131;
    }


    .nav-item:hover {
        background: cornflowerblue;
    }
    
    .content {
        width: 100%;
        display: flex;
        margin: -20px -20px -20px 0;
        background: white;
        position: relative;
    }

    .router-link-exact-active {
        background: #daadb4;
    }

</style>