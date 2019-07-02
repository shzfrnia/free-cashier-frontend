<template>
  <div class="about">
<!--    <img src="../../public/ы.jpg"/>-->
    <hr/>
<!--    <h1>Контактная информация</h1>-->
      <button
              v-for="tab in tabs"
              v-bind:key="tab"
              v-on:click="currentTab = tab.componentName"
              v-bind:class="[{ active: currentTab === tab.componentName }]"
      >
                {{ tab.visibleName }}
      </button>
      <keep-alive>
        <component v-bind:is="currentTab"></component>
      </keep-alive>
<!--    <div class="text">Наш адрес : Ленина 87</div>-->
<!--    <div class="text">Контактный номер : 506078</div>-->
  </div>
</template>

<script>
    import GoogleMap from '../components/GoogleMap'
    import WhiteBox from '../components/WhiteBox'

  export default {
    name: "about",
    components: {
      GoogleMap,
      WhiteBox
    },
    data() {
      return {
        currentTab : 'google-map',
        tabs : [
          {
            componentName: 'google-map',
            visibleName: 'MAP'
          },
          {
            componentName: 'white-box',
            visibleName: "BOX"
          }
        ]
      }
    }
  }
</script>

<style scoped>
    img{
        height: 300px;
    }
    .about{
        background-color:white;height: 100%;
    }
    .active {
      background: red;
    }
    h1{
        margin-top:1%;
    }
    hr {
        border: none; /* Убираем границу */
        background-color:#BE0031; /* Цвет линии */
        color:#BE0031; /* Цвет линии для IE6-7 */
        height: 8px; /* Толщина линии */
    }
</style>
