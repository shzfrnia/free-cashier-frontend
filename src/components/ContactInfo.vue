<template>
    <div>
        <ModalWindow
                v-if="showMap"
                :width-size="54"
                @submit="showMap=false"
                :close-button="true"
        >
            <google-map></google-map>
        </ModalWindow>
        <img src="../../public/ы.jpg"/>
        <hr>
        <h1>Контактная информация</h1>
        <div class="text">Наш адрес : Ленина 87
            <div class="map-marker-wrapper">
                <i @click="showMap=true" style="color: red;" class="fas fa-map-marker map-marker"></i>
            </div>
        </div>
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
        width: 70%;
    }

   .text{
       margin-top: 1%;font-size: 30px;
   }

    .map-marker-wrapper {
        display: inline-block;
        width: 40px;
        background: #ecebeb;
        height: 40px;
        border-radius: 25px;
        text-align: center;
        cursor: pointer;
    }

    .map-marker-wrapper:hover {
        box-shadow: 0 0 3px black;
    }


    .map-marker {
        line-height: 40px;
    }
</style>