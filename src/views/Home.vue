<template>
    <div>
        <!--<img @click="$emit('spange-bob')" width="10%" height="auto" src="../../public/СПАНЧ.png">-->
        <modal-window v-if="showReservationForm" @submit="showReservationForm=false">
            <reservation-form :reservation-date="reservationDate" :reservation-id="reservationTableId"></reservation-form>
        </modal-window>

        <div class="booking">
<!--            <h2>Выберите место</h2>-->
            <div class="booking-map">
                <h2>Выберите место</h2>
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

<!--            BETA-->
<!--                <div-->
<!--                        style="display: inline-block;"-->
<!--                        :key="table.id"-->
<!--                        v-for="table in getTables()"-->
<!--                        class = "tbl-figure-m"-->
<!--                        @click="openReservationForm(table.id)"-->
<!--                >-->
<!--                    <div>{{table.size}}</div>-->
<!--                </div>-->





                <!--Столики-->
                <div @click="openReservationForm(getTables()[0].id)" class = "tbl-figure-m" id = "map-tbl-1">
                    <div class = "nmbr-places" style="transform: rotate(-90deg);">4</div>
                </div>
                <div @click="openReservationForm(getTables()[1].id)" class = "tbl-figure-m" id = "map-tbl-2">
                    <div class = "nmbr-places" style="transform: rotate(-90deg);">4</div>
                </div>
                <div @click="openReservationForm(getTables()[2].id)" class = "tbl-figure-m" id = "map-tbl-3">
                    <div class = "nmbr-places">4</div>
                </div>
                <div @click="openReservationForm(getTables()[3].id)" class = "tbl-figure-s" id = "map-tbl-4">
                    <div class = "nmbr-places">2</div>
                </div>
                <div @click="openReservationForm(getTables()[4].id)" class = "tbl-figure-m" id = "map-tbl-5">
                    <div class = "nmbr-places">4</div>
                </div>
                <div @click="openReservationForm(getTables()[5].id)" class = "tbl-figure-m" id = "map-tbl-6">
                    <div class = "nmbr-places">4</div>
                </div>
                <div @click="openReservationForm(getTables()[6].id)" class = "tbl-figure-s" id = "map-tbl-7">
                    <div class = "nmbr-places">2</div>
                </div>
                <div @click="openReservationForm(getTables()[7].id)" class = "tbl-figure-l" id = "map-tbl-8">
                    <div class = "nmbr-places">6</div>
                </div>
                <div @click="openReservationForm(getTables()[8].id)" class = "tbl-figure-l" id = "map-tbl-9">
                    <div class = "nmbr-places">6</div>
                </div>
                <div @click="openReservationForm(getTables()[9].id)" class = "tbl-figure-xl" id = "map-tbl-10">
                    <div class = "nmbr-places">8</div>
                </div>
                <div @click="openReservationForm(getTables()[10].id)" class = "tbl-figure-xl" id = "map-tbl-11">
                    <div class = "nmbr-places">8</div>
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
            reservationDate: ''
        }
    },
    methods: {
        getTables() {
            return this.$store.state.tables
        },
        openReservationForm(id) {
          this.reservationTableId = id
          this.showReservationForm = true
        },

    },
    async created() {
        await this.$store.dispatch('fetchTables','0')
        this.reservationDate = moment().format('YYYY-MM-DD')
        // window.console.log(new Date())
        this.tablesFetchInterval = window.setInterval(() => this.$store.dispatch('fetchTables','0'), 5000)
    },
    beforeRouteLeave(to, from, next) {
        window.clearInterval(this.tablesFetchInterval)
        next()
    }
}

</script>
<style scoped>
    #date{    
       border-radius: 5px;
       height: 25px;
       outline: none;}
    .date{
        margin: auto;
        height: 30px;
        top: 2%;
        right: -55%;
        position: absolute;
    }
    h2 {
        margin: auto;
        height: 30px;
        width: 200px;
        top: 14%;
        right: -15%;
        position: absolute;
    }

    .booking {

    }

    .legend {
        position: absolute;
        right: -34%;
        top: 46%;
        font-size: 14pt;
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
        background-color: #86EE75;
    }

    .tbl-occupied {
        background-color: #EE7575;
    }

    .tbl-part-occupied {
        background-color: #ffff52;
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
        background-color: rgb(22, 127, 224);
        width: 44px;
        height: 44px;
        border-radius: 8px;
    }

    .tbl-figure-m {
        background-color: rgb(22, 127, 224);
        width: 80px;
        height: 44px;
        border-radius: 5px;
    }

    .tbl-figure-l {
        background-color: rgb(22, 127, 224);
        width: 122px;
        height: 44px;
        border-radius: 5px;
    }

    .tbl-figure-xl {
        background-color: rgb(22, 127, 224);
        width: 162px;
        height: 44px;
        border-radius: 5px;
    }

    #map-tbl-1 {
        background-color: #EE7575;
        display: block;
        position: absolute;
        top: 35px;
        left: 80px;
        transform: rotate(90deg);
    }

    #map-tbl-2 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 35px;
        left: 196px;
        transform: rotate(90deg);
    }

    #map-tbl-3 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 180px;
        left: 14px;
    }

    #map-tbl-4 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 156px;
        left: 156px;
    }

    #map-tbl-5 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 180px;
        left: 257px;
    }

    #map-tbl-6 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 296px;
        left: 14px;
    }


    #map-tbl-7 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 264px;
        left: 156px;
    }

    #map-tbl-8 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 400px;
        left: 14px;
    }

    #map-tbl-9 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 400px;
        left: 215px;
    }

    #map-tbl-10 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 224px;
        left: 378px;
    }

    #map-tbl-11 {
        background-color: #86EE75;
        display: block;
        position: absolute;
        top: 400px;
        left: 378px;
    }
</style>
