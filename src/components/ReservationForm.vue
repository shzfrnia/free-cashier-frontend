<template>
    <form>
        <h1>Бронирование столика №:{{reservationId}}
            <select v-if="showSelectTable" name="Booking_id" class="b1 textfield textfield-time">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </h1>
<!--        <div class="text "> Имя <input type="text" name="Name" class="text" v-model="name"></div><br/>-->
<!--        <div class="text ">Контактный номер <input type="tel" name="Phone" class="text" maxlength="11" v-model="phone"></div><br/>-->
<!--        <div class="text ">Время брони <input type="time" name="Booking_time" class="text" v-model="time"></div><br/>-->
        <input placeholder="Имя" type="text" name="Name" id="name" class="textfield" maxlength="30" v-model="name">
        <input placeholder="Телефон" type="tel" name="Phone" class="textfield" maxlength="11" v-model="phone">
        <div class="text ">Время брони
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
        </div>
        <div class="text red">{{getDate()}}</div><br/>
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
      },
      reservationTime: {
          type: Number,
          default: null
      },
      showSelectTable: {
            type: Boolean,
            default: false
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
      getDate() {
          if (this.reservationTime == null)
          {
              return ""
          }
          else
          return (" Стол свободен до " + moment.unix(this.reservationTime).format('HH:mm'))
      },
      submitForm() {
        const stringDate = this.reservationDate + '-' + this.time;
        const date = moment(stringDate, 'YYYY-MMMM-DD-HH:mm').unix();

        let param = {
            idTable: this.reservationId,
            name: this.name,
            phone: this.phone,
            time: date
        };

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
    .b1{
        margin:3px;
        display: inline-block;
        width: 70px !important;
    }
    .title {
        margin-bottom: 2%;
    }

    #close-btn {
        position: absolute;
        margin: 8px;
        top: 0;
        right: 0;
        font-size: 14pt;
        background: transparent;
        border: none;
    }

    #close-btn:focus, #close-btn:active {outline:none;}

    #submit {
        background-color: #CC8602;
        border: none;
        color: white;
        width: 240px;
        border-radius: 8px;
        height: 56px;
        outline: none;
    }

    .textfield {
        display: block;
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
        /* margin-left: 48px; */
    }

    .textfield:focus {
        border: 2px solid black;
        padding: 11px;
    }

    .text {
        font-size: 25px;
    }

    .red {
        color: red;
        margin: 8px auto;
    }

    /*#submit {*/
    /*    background-color: #CC8602;*/
    /*    border: none;*/
    /*    color: white;*/
    /*    width: 240px;*/
    /*    border-radius: 10px;*/
    /*    height: 60px;*/
    /*    outline: none;*/
    /*}*/

    /*.text {*/
    /*    margin-top: 1%;font-size: 30px;*/
    /*}*/

    /*.red {*/
    /*    color: red;*/
    /*}*/

    .head{font-weight: bold;}

#submit:hover { background: rgb(218, 149, 22); } 
#submit:active { background: rgb(139, 94, 8); } 
 
</style>