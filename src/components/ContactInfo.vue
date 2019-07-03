<template>
    <div>
        <ModalWindow
                v-if="showMap"
                width-size="35"
                @submit="showMap=false"
                close-button="true"
        >
            <google-map></google-map>
        </ModalWindow>
        <img src="../../public/ы.jpg"/>
        <hr>
        <h1>Контактная информация</h1>
        <div class="text">Наш адрес : Ленина 87
            <i @click="showMap=true" style="color: red;" class="fas fa-map-marker"></i></div>
        <div class="text">Контактный номер : 506078</div>
        <div class="text">Время работы : с 12:00 до 24:00, ежедневно</div>
    </div>
</template>

<script>
    import ModalWindow from './ModalWindow'
    import GoogleMap from './GoogleMap'

  export default {
    name: "ContactInfo",
    components: {
      ModalWindow,
      GoogleMap
    },
    data() {
      return {
        showMap: false
      }
    }
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