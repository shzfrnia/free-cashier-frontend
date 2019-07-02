<template>
    <div>
        <img src="../../public/ы.jpg"/>
        <hr>
        <h1>Контактная информация</h1>
        <div class="text">Наш адрес : Ленина 87</div>
        <div class="text">Контактный номер : 506078</div>
    </div>
</template>

<script>
  export default {
    name: "ContactInfo"
  }
</script>

<style scoped>
    h1 {
        margin-top:1%;
    }
    hr {
        border: none; /* Убираем границу */
        background-color:#BE0031; /* Цвет линии */
        color:#BE0031; /* Цвет линии для IE6-7 */
        height: 8px; /* Толщина линии */
        border-radius: 4px;
    }

    img {
        height: 300px;
    }
   .text{margin-top: 1%;font-size: 30px;}

</style>