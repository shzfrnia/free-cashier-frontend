<template>
    <div class="main">
        <div class="nav">
            <div
                    :key="i"
                    class="nav-item"
                    v-for="i in tabs"
                    @click="selectedTab = i.componentName"
                    :class="{ selected: i.componentName === selectedTab }"
            >{{i.displayName}}</div>
            <div class="nav-item" @click="$store.dispatch('logOut')">LogOut</div>
        </div>
        <div class="content">
            <component :is="selectedTab"></component>
        </div>
    </div>
</template>

<script>
    import Reservations from './Reservations'
    import ReservationFormAdmin from './ReservationFormAdmin'

  export default {
    name: "AdminMenu",
    components: {
      Reservations,
      ReservationFormAdmin
    },
    data() {
      return {
        tabs: [
          {
            displayName: 'Бронирование стола',
            componentName: 'reservation-form-admin'
          },
          {
            displayName: 'Бронирования',
            componentName: 'reservations'
          }
        ],
        selectedTab: 'reservation-form-admin'
      }
    }
  }
</script>

<style scoped>
    .main {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .nav {
        min-width: 270px;
        background: #c1c1c1;
        margin: -20px;
    }

    .nav-item {
        text-align:left;
        padding: 10px 10px 0 10px;
        font-size: 20px;
    }


    .nav-item:hover {
        background: cornflowerblue;
    }
    
    .content {
        width: 100%;
        display: flex;
        margin: -20px;
        background: red;
    }

    .selected {
        background: #CC8602;
    }

</style>