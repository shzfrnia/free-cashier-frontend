<template>
  <div class="about">
      <div class="my-btn-container">
          <button
                  v-for="tab in tabs"
                  :key="tab.icon"
                  v-on:click="currentTab = tab.componentName"
                  class="my-btn"
                  v-bind:class="[{ active: currentTab === tab.componentName }]">
              <i style="color: red;" :class="['fas', `fa-${tab.icon}`]"></i>
          </button>
      </div>
      <keep-alive>
        <component v-bind:is="currentTab"></component>
      </keep-alive>
  </div>
</template>

<script>
    import GoogleMap from '../components/GoogleMap'
    import ContactInfo from '../components/ContactInfo'

  export default {
    name: "about",
    components: {
      GoogleMap,
      ContactInfo
    },
    data() {
      return {
        currentTab : 'contact-info',
        tabs : [
          {
            componentName: 'contact-info',
            visibleName: "Contacts",
            icon: 'user'
          },
          {
            componentName: 'google-map',
            visibleName: 'MAP',
            icon: "map-marker"
          }
        ]
      }
    }
  }
</script>

<style scoped>
    .my-btn-container {
        position: relative;
    }

    .my-btn {
        display: inline-block;
        cursor: pointer;
        width: 50px;
        height: 50px;
        margin: 5px;
        font-size: 25px;
        color: gray;
        border-radius: 25px;
        background-color: white;
        text-align: center;
        line-height: 50px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        transition: 0.5s;
        outline: none;
        border: none;
    }


    .active {
      background: red;
    }
</style>
