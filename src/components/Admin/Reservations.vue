<template>
    <div class="containter">
        <modal-window v-if="showEditTime" @submit="showEditTime=false">
            <edit-reservation-form
                    :reservation-name="reservationName"
                    :reservation-id="reservationTableId"
                    :reservation-time="reservationTime"
                    :reservation-phone="reservationPhone"></edit-reservation-form>
        </modal-window>

        <div class="date">
            <input v-model="reservationDate" type="date" id="date"/>
        </div>
        <div id="legend" class="row">
            <div class="table-id item">
                №
            </div>
            <div class="client-name item">
                Имя клиента
            </div>
            <div class="phone item">
                Телефон
            </div>
            <div class="time item">
                Время
            </div>
            <div class="delete-field item">
                <i class="fas fa-trash" aria-hidden="true"></i>
            </div>
        </div>
        <div :key="r.id" v-for="r in getReservations()" class="row">
            <div @click="openEditTimeForm(r)" class="table-id item">
                {{r.id}}
            </div>
            <div @click="openEditTimeForm(r)" class="client-name item">
                {{r.name}}
            </div>
             <div @click="openEditTimeForm(r)" class="phone item">
                {{r.phone}}
            </div>
            <div @click="openEditTimeForm(r)" class="time item">
                {{r.time | prettyDate}}
            </div>
            <div class="delete-field item">
                <button @click="deleteReservation(r.id)" class="delete-btn"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import EditReservationForm from './EditReservationForm'
    import ModalWindow from '../ModalWindow'

  export default {
    name: "Reservations",
      components: {EditReservationForm, ModalWindow},
      component: { EditReservationForm, ModalWindow},
    data() {
      return {
        reservationDate: '',
        ReservationFetchInterval: null,
          showEditTime: false
      }
    },
    watch: {
      reservationDate: async function () {
        await this.$store.dispatch('fetchReservations', this.toUnix)
      }
    },
    methods: {
      getReservations() {
        return this.$store.state.reservations
      },
      openEditTimeForm(r) {
        this.reservationTableId = r.id,
        this.reservationTime = r.time,
        this.reservationName = r.name,
        this.reservationPhone = r.phone,
        this.showEditTime = true
      },
      async deleteReservation(id) {
        await this.$store.dispatch('deleteReservation', id)
        await this.$store.dispatch('fetchReservations', this.toUnix)
      }
    },
    computed: {
      toUnix() {
        return moment(this.reservationDate).unix();
      }
    },
    filters: {
      prettyDate(value) {
        return moment.unix(value).format('HH:mm')
      }
    },
    async created() {
      this.reservationDate = moment().format('YYYY-MM-DD')
      await this.$store.dispatch('fetchReservations', this.toUnix)
      this.ReservationFetchInterval = window.setInterval(() => this.$store.dispatch('fetchReservations', this.toUnix), 5000)
    },
    beforeRouteLeave(to, from, next) {
      window.clearInterval(this.ReservationFetchInterval)
      next()
    }
  }
</script>

<style scoped>
    #legend:hover {
        background: none;
        box-shadow: none;
    }

    .containter {
        width: 100%;
        overflow: auto;
    }

    .row {
        display: flex;
        position: relative;
        margin: 10px;
        height: 50px;
        transition: .2s;
        border-bottom: 1px solid black;
    }

    .row:hover {
        box-shadow: 0 0 10px black;
    }

    .row :last-child {
        border: none;
    }

    .item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .table-id {
        min-width: 50px;
    }

    .client-name {
        flex-grow: 1;
    }

    .phone{
        min-width: 100px;
    }

    .time {
        min-width: 100px;
    }

    .delete-field {
        min-width: 50px;
    }

    .delete-btn {
        outline: none;
        border-radius: 10px;
        height: 70%;
        font-size: 20px;
        width: 70%;
        transition: .11s;
    }

    .delete-btn:hover {
        color: red;
    }

    .delete-btn:active {
        background: red;
        color: white;
    }

    #date{
        border-radius: 5px;
        height: 30px;
        outline: none;
        border: solid 1px gray;
        font-size:20px;
        width: 200px;
    }
    .date{
        padding-right: 10px;
        text-align: right;
        height: 50px;
        font-size: 30px;
    }
</style>