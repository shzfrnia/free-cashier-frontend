<template>
    <div>
        <modal-window v-if="showReservationForm" @submit="showReservationForm=false">
            <reservation-form :reservation-date="reservationDate" :reservation-id="reservationTableId" :reservation-time="reservationTime"></reservation-form>
        </modal-window>

        <div class="booking">
<!--            <h2>Выберите место</h2>-->
            <div class="booking-map">
                <div class="booking-text">Стол</div>
                <div class="date">Выберите дату брони 
                    <input v-model="reservationDate" type="date" id="date"/>
                </div>
                <div class="legend">
                    <div class="legend-list"><div class="tbl-icon tbl-free"></div>Свободен</div>
                    <div class="legend-list"><div class="tbl-icon tbl-part-occupied"></div>Частично занят</div>
                    <div class="legend-list"><div class="tbl-icon tbl-occupied"></div>Занят</div>
                </div>
                <!--Карта-->
                <img src="../../public/map.svg">

                <!--Столики-->
                <div v-if="getTables().length > 0">
                    <div @click="openReservationForm(getTables()[0].id, getTables()[0].reservation)" class = "tbl-figure-m" :class='[getTables()[0].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-1">
                        <div class = "nmbr-places" style="transform: rotate(-90deg);">{{getTables()[0].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[1].id, getTables()[1].reservation)" class = "tbl-figure-m" :class='[getTables()[1].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-2">
                        <div class = "nmbr-places" style="transform: rotate(-90deg);">{{getTables()[1].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[2].id, getTables()[2].reservation)" class = "tbl-figure-m" :class='[getTables()[2].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-3">
                        <div class = "nmbr-places">{{getTables()[2].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[3].id, getTables()[3].reservation)" class = "tbl-figure-s" :class='[getTables()[3].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-4">
                        <div class = "nmbr-places">{{getTables()[3].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[4].id, getTables()[4].reservation)" class = "tbl-figure-m" :class='[getTables()[4].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-5">
                        <div class = "nmbr-places">{{getTables()[4].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[5].id, getTables()[5].reservation)" class = "tbl-figure-m" :class='[getTables()[5].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-6">
                        <div class = "nmbr-places">{{getTables()[5].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[6].id, getTables()[6].reservation)" class = "tbl-figure-s" :class='[getTables()[6].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-7">
                        <div class = "nmbr-places">{{getTables()[6].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[7].id, getTables()[7].reservation)" class = "tbl-figure-l" :class='[getTables()[7].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-8">
                        <div class = "nmbr-places">{{getTables()[7].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[8].id), getTables()[8].reservation" class = "tbl-figure-l" :class='[getTables()[8].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-9">
                        <div class = "nmbr-places">{{getTables()[8].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[9].id, getTables()[9].reservation)" class = "tbl-figure-xl" :class='[getTables()[9].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-10">
                        <div class = "nmbr-places">{{getTables()[9].size}}</div>
                    </div>
                    <div @click="openReservationForm(getTables()[10].id, getTables()[10].reservation)" class = "tbl-figure-xl" :class='[getTables()[10].reservation == null ? "tbl-free" : "tbl-part-occupied"]' id = "map-tbl-11">
                        <div class = "nmbr-places">{{getTables()[10].size}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import ModalWindow from '../components/ModalWindow'
    import ReservationForm from '../components/ReservationForm'
    import moment from 'moment'

export default {
    name: 'home',
    components: {
      ModalWindow,
      ReservationForm
    },
    data() {
        return {
            showReservationForm: false,
            tablesFetchInterval: null,
            tables: this.$store.state.tables,
            reservationTableId: null,
            reservationDate: '',
            reservationTime: ''
        }
    },
    computed:{
        toUnix() {
            return moment(this.reservationDate).unix();
        },
        fetchTables() {
            return this.$store.dispatch('fetchTables', this.toUnix)
        }
    },
    methods: {
        getTables() {
            return this.$store.state.tables
        },
        openReservationForm(id, time = null) {
          this.reservationTableId = id
            this.reservationTime = time
          this.showReservationForm = true
        }
    },
    async created() {
        this.reservationDate = moment().format('YYYY-MM-DD')
        await this.$store.dispatch('fetchTables', this.toUnix)
        this.tablesFetchInterval = window.setInterval(() => this.$store.dispatch('fetchTables', this.toUnix), 5000)
    },
    beforeRouteLeave(to, from, next) {
        window.clearInterval(this.tablesFetchInterval)
        next()
    }
}

</script>
<style scoped>
     #date{   
       display: block;
       border: solid 1px gray;
       margin: 8px auto; 
       border-radius: 5px;
       height: 30px;
       outline: none;
       font-size:20px;
       width: 200px;
       text-align: left;
    }
    .date {
        margin: auto;
        top: 3%;
        right: -25%;
        position: absolute;
        font-size: 30px;
    }


    .booking-text {
        margin: auto;
        height: 30px;
        top: 38%;
        right: -23%;
        position: absolute;
        font-size: 25px;
    }

    .legend {
        position: absolute;
        right: -34%;
        top: 46%;
        font-size: 18px;
    }

    .legend-list {
        margin-bottom: 8px;
        height: 32px;
        text-align: left;
    }

    .tbl-icon {
        display: inline-block;
        position: relative;
        top: 15%;
        margin-right: 24px;
        width: 28px;
        height: 28px;
        border-radius: 8px;
    }

    .tbl-free {
        background-color: #68f768;
    }

    .tbl-occupied {
        background-color: #fd5e53;
    }

    .tbl-part-occupied {
        background-color: #ffc261;
    }

    .booking-map {
        text-align: center;
        position:relative;
        height: 496px;
        width: 576px;
    }

    .booking-map img {
        width: 576px;
        height: 496px;
    }

    .nmbr-places {
        position: absolute;
        top: calc(50% - 12px);
        left: calc(50% - 12px);
        width: 24px;
        height: 24px;
        font-size: 16pt;
        color: white;
    }

    .tbl-figure-s {
        width: 44px;
        height: 44px;
        border-radius: 8px;
    }

    .tbl-figure-m {
        width: 80px;
        height: 44px;
        border-radius: 5px;
    }

    .tbl-figure-l {
        width: 122px;
        height: 44px;
        border-radius: 5px;
    }

    .tbl-figure-xl {
        width: 162px;
        height: 44px;
        border-radius: 5px;
    }

    #map-tbl-1 {
        display: block;
        position: absolute;
        top: 35px;
        left: 80px;
        transform: rotate(90deg);
    }

    #map-tbl-2 {
        display: block;
        position: absolute;
        top: 35px;
        left: 196px;
        transform: rotate(90deg);
    }

    #map-tbl-3 {
        display: block;
        position: absolute;
        top: 180px;
        left: 14px;
    }

    #map-tbl-4 {
        display: block;
        position: absolute;
        top: 156px;
        left: 156px;
    }

    #map-tbl-5 {
        display: block;
        position: absolute;
        top: 180px;
        left: 257px;
    }

    #map-tbl-6 {
        display: block;
        position: absolute;
        top: 296px;
        left: 14px;
    }


    #map-tbl-7 {
        display: block;
        position: absolute;
        top: 264px;
        left: 156px;
    }

    #map-tbl-8 {
        display: block;
        position: absolute;
        top: 400px;
        left: 14px;
    }

    #map-tbl-9 {
        display: block;
        position: absolute;
        top: 400px;
        left: 215px;
    }

    #map-tbl-10 {
        display: block;
        position: absolute;
        top: 224px;
        left: 378px;
    }

    #map-tbl-11 {
        display: block;
        position: absolute;
        top: 400px;
        left: 378px;
    }
</style>
