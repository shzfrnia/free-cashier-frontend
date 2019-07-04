<template>
    <form>
        <input type="button" value="Закрыть" name="close-tab" id="close-btn">
        <h1 class="title">Бронирование столика: {{reservationId}}</h1>
        <input placeholder="Имя" type="text" name="Name" id="name" class="textfield">
        <input placeholder="Телефон" type="tel" name="Phone" class="textfield" maxlength="11">
        <div class="text ">Дата брони<input type="date" name="Booking_date" class="textfield"></div>
        <!--<div class="text ">
            Время брони<input type="time" name="Booking_time" class="textfield textfield-time">
        </div>-->
        <div class="text ">Время брони
            <select name="Booking_time" class="textfield textfield-time">
                <option value="time_12_00">12:00</option>
                <option value="time_12_30">12:30</option>
                <option value="time_13_00">13:00</option>
                <option value="time_13_30">13:30</option>
                <option value="time_14_00">14:00</option>
                <option value="time_14_30">14:30</option>
                <option value="time_15_00">15:00</option>
                <option value="time_15_30">15:30</option>
                <option value="time_16_00">16:00</option>
                <option value="time_16_30">16:30</option>
                <option value="time_17_00">17:00</option>
                <option value="time_17_30">17:30</option>
                <option value="time_18_00">18:00</option>
                <option value="time_18_30">18:30</option>
                <option value="time_19_00">19:00</option>
                <option value="time_19_30">19:30</option>
                <option value="time_20_00">20:00</option>
                <option value="time_20_30">20:30</option>
                <option value="time_21_00">21:00</option>
                <option value="time_21_30">21:30</option>
                <option value="time_22_00">22:00</option>
                <option value="time_22_30">22:30</option>
            </select>
        </div>
        <div class="text red">Стол свободен до @TIME-30мин</div>
        <input @click="submitForm" type="button" value="Забронировать" name="submit" id="submit" class="text">
    </form>
</template>

<script>
  export default {
    name: "ReservationForm",
    props: {
      reservationId: {
        type: Number,
        required: true
      }
    },
    methods: {
      submitForm() {
        this.$parent.closeWindowDialog()
      }
    }
  }

  // $(function(){
  //   //2. Получить элемент, к которому необходимо добавить маску
  //   $("#Phone").mask("8(999) 999-9999");
  // });
</script>

<style scoped>

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
        margin-left: 48px;
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

    .head{font-weight: bold;}

#submit:hover { background: rgb(218, 149, 22); } 
#submit:active { background: rgb(139, 94, 8); } 
 
</style>