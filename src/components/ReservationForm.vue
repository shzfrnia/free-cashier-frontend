<template>
    <form>
        <div class="text "> Имя <input type="text" name="Name" class="text"></div><br/>
        <div class="text ">Контактный номер <input type="tel" name="Phone" class="text" maxlength="11"></div><br/>
        <div class="text ">Время брони <input type="time" name="Booking_time" class="text"></div><br/>
        <div class="text red">Стол свободен до @TIME-30мин</div><br/>
        <input @click="submitForm" type="button" value="Забронировать" name="submit" id="submit" class="text">
    </form>
</template>

<script>
  export default {
    name: "ReservationForm",
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
    #submit {
        background-color: #CC8602;
        border: none;
        color: white;
        width: 240px;
        border-radius: 10px;
        height: 60px;
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