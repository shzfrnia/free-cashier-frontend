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
            <input v-model="reservationDate" type="date" id="date" class="textfield"/>
        </div>
        <div id="legend" class="row">
            <div class="table-id item">
                №
            </div>
            <div class="client-name item">
                Имя клиента
            </div>
            <div class="time item">
                Время
            </div>
            <div class="delete-field item">
                <i class="fas fa-trash" aria-hidden="true"></i>
            </div>
        </div>
        <div :key="r.id" v-for="r in getReservations()" class="row" @click="openEditTimeForm(r)">
            <div class="table-id item">
                {{r.id}}
            </div>
            <div class="client-name item">
                {{r.name}}
            </div>
            <div class="time item">
                {{r.time | prettyDate}}
            </div>
            <div class="delete-field item">
                <button class="delete-btn"><i class="fas fa-trash" aria-hidden="true"></i></button>
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
        }
    },
    computed: {
      toUnix() {
        return moment(this.reservationDate).unix();
      }
    },
    filters: {
      prettyDate(value) {
        const t = parseInt(value)
        return moment(t).format('DD/MM/YYYY')
      }
    },
    async created() {
      this.reservationDate = moment().format('YYYY-MM-DD')
      await this.$store.dispatch('fetchReservations', this.toUnix)
      this.ReservationFetchInterval = window.setInterval(() => this.$store.dispatch('fetchReservations', this.toUnix), 5000)
    }
  }
</script>

<style scoped>
    #legend:hover {
        background: #c2c0dc;
    }

    .containter {
        width: 100%;
        overflow: auto;
    }

    .row {
        display: flex;
        position: relative;
        margin: 1px;
        /*border-radius: 10px;*/
        border: 1px solid black;
        background: #c2c0dc;
        height: 50px;
        transition: .2s;
    }

    .row:hover {
        background:  #d8aeba;
    }

    .row :last-child {
        border: none;
    }

    .item {
        display: flex;
        border-right: 1px solid black;
        justify-content: center;
        align-items: center;
    }

    .table-id {
        min-width: 50px;
    }

    .client-name {
        flex-grow: 1;
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

    .delete-btn:active {
        background: red;
    }

    #date{
        border-radius: 5px;
        height: 25px;
        outline: none;
        font-size:20px;
    }
    .date{
        height: 50px;
        font-size: 30px;
    }

</style>