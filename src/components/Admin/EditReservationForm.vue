<template>
    <form>
        <h1>Изменить время:</h1>
        <input placeholder="Имя" type="text" name="Name" id="name" class="textfield" maxlength="30" v-model="name" readonly >
        <input placeholder="Телефон" type="tel" name="Phone" class="textfield" maxlength="11" v-model="phone" readonly>
        <select name="Booking_time" class="textfield textfield-time" v-model="time">
            <option value="12:00">12:00</option>
            <option value="12:30">12:30</option>
            <option value="13:00">13:00</option>
            <option value="13:30">13:30</option>
            <option value="14:00">14:00</option>
            <option value="14:30">14:30</option>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
            <option value="22:30">22:30</option>
        </select>
        <input @click="submitForm" type="button" value="Изменить" name="submit" id="submit" class="text">
    </form>
</template>

<script>
    import {TablesApi} from '../../api/server/index'
    import moment from 'moment'

    export default {
        name: "EditReservationForm",
        props: {
            reservationId: {
                type: Number,
                required: true
            },
            reservationName: {
                type: String,
                required: true
            },
            reservationPhone: {
                type: String,
                required: true
            },
            reservationTime: {
                type: Number,
                default: null
            }
        },
        data() {
          return {
              name: this.reservationName,
              phone: this.reservationPhone,
              time: this.reservationTime
          }
        },
        methods: {
            submitForm() {
                const stringDate = this.reservationDate + '-' + this.time;
                const date = moment(stringDate, 'YYYY-MMMM-DD-hh:mm').unix();

                let param = {
                    id: this.reservationId,
                    name: this.name,
                    phone: this.phone,
                    date: date
                };

                window.console.log(TablesApi.reservationTable(JSON.stringify(param)));
                this.$parent.closeWindowDialog();
            }
        }
    }
</script>

<style scoped>
    h1 {
        margin-bottom: 20px;
    }

    #submit {
        background-color: #CC8602;
        border: none;
        color: white;
        width: 240px;
        border-radius: 8px;
        height: 56px;
        outline: none;
        margin-left: 16px;
    }

    .textfield {
        display: inline-block;
        font-size: 25px;
        width: 320px;
        border: solid 1px gray;
        border-radius: 4px;
        outline: none;
        padding: 12px;
        margin: 8px auto;
    }

    .textfield-time {
        display: inline-block;
        width: 140px;
    }

    .textfield:focus {
        border: 2px solid black;
        padding: 11px;
    }

    .text {
        font-size: 25px;
    }

    #submit:hover { background: rgb(218, 149, 22); }
    #submit:active { background: rgb(139, 94, 8); }

</style>