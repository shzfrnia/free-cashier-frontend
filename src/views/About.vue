<template>
  <div class="about">
      <button
              v-for="tab in tabs"
              v-bind:key="tab"
              v-on:click="currentTab = tab.componentName"
              v-bind:class="[{ active: currentTab === tab.componentName }]">
        {{ tab.visibleName }}
      </button>
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
            visibleName: "Contacts"
          },
          {
            componentName: 'google-map',
            visibleName: 'MAP'
          }
        ]
      }
    }
  }
</script>

<style scoped>
    .active {
      background: red;
    }
</style>
