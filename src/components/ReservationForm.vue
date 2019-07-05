<template>
    <form>
        <h1>You trying reservation table : {{reservationId}}</h1>
        <div class="text "> Имя <input type="text" name="Name" class="text" v-model="name"></div><br/>
        <div class="text ">Контактный номер <input type="tel" name="Phone" class="text" maxlength="11" v-model="phone"></div><br/>
        <div class="text ">Время брони <input type="time" name="Booking_time" class="text" v-model="time"></div><br/>
        <div class="text red">Стол свободен до @TIME-30мин</div><br/>
        <input @click="submitForm" type="button" value="Забронировать" name="submit" id="submit" class="text">
    </form>
</template>

<script>
    import {TablesApi} from '../api/server/index' //'api-client'
    import moment from 'moment'


  export default {
    name: "ReservationForm",
    props: {
      reservationId: {
        type: Number,
        required: true
      },
      reservationDate: {
          type: String,
          required: true
      }
    },
    data(){
        return {
            name: "",
            phone: "",
            time: ""
        }
    },
    methods: {
      submitForm() {
        const stringDate = this.reservationDate + '-' + this.time;
        alert(stringDate);

          // const moment = require('moment');
          // moment.locale("ru");
          // const date = moment(stringDate, 'DD-MMMM-YYYY-hh:mm').unix();
          //
          // console.log(date);

        let param = {
            id: this.reservationId,
            name: this.name,
            phone: this.phone,
            date: this.reservationDate,
            time: this.time
        };
        //alert(JSON.stringify(param));
        window.console.log(TablesApi.reservationTable(JSON.stringify(param)));
        this.$parent.closeWindowDialog();
      }
    }
  }

  // $(function(){
  //   //2. Получить элемент, к которому необходимо добавить маску
  //   $("#Phone").mask("8(999) 999-9999");
  // });
</script>

<style scoped>
    #submit {
        background-color: #CC8602;
        border: none;
        color: white;
        width: 240px;
        border-radius: 10px;
        height: 60px;
        outline: none;
    }

    .text {
        margin-top: 1%;font-size: 30px;
    }

    .red {
        color: red;
    }

    .head{font-weight: bold;}

#submit:hover { background: rgb(218, 149, 22); } 
#submit:active { background: rgb(139, 94, 8); } 
 
</style>