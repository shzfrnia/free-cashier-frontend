<template>
    <form action="post">
        <div class="text "> Имя <input type="text" name="Name" class="text"></div><br/>
        <div class="text ">Контактный номер <input type="tel" name="Phone" class="text" maxlength="11"></div><br/>
        <!-- Количество человек <select name="People_count" class="text"><br/>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select><br/> -->
        <div class="text ">Время брони <input type="time" name="Booking_time" class="text"></div><br/>
        <div class="text red">Стол свободен до @TIME-30мин</div><br/>
        <input type="submit" value="Забронировать" name="submit" id="submit" class="text">
    </form>
</template>

<script>
  export default {
    name: "ReservationForm"
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
    }

    .text{
        margin-top: 1%;font-size: 30px;
    }

    .red{
        color: red;
    }

</style>