<template>
    <div>
        <img src="../../public/ы.jpg"/>
        <hr>
        <h1>Контактная информация</h1>
        <div class="text">Наш адрес : Ленина 87</div>
        <div class="text">Контактный номер : 506078</div>
        <div class="text">Время работы : с 12:00 до 24:00, ежедневно</div>
        <div class="text">
            <button @click="showWindowDialog" class="btn">
                Show
            </button>
        </div>
        <modal-window @submit="mapModal=false" v-if="mapModal">
            <google-map></google-map>
        </modal-window>
    </div>
</template>

<script>
    import GoogleMap from './GoogleMap'
    import ModalWindow from './ModalWindow'

  export default {
    name: "ContactInfo",
    components: {
        GoogleMap,
        ModalWindow
    },
    data(){
        return {
            mapModal: true
        }
    },
    methods: {
        showWindowDialog() {
            this.mapModal = true
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
   .text{margin-top: 1%;font-size: 30px;}

</style>