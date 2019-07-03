<template>
  <div>
<!--      <img @click="$emit('spange-bob')" width="10%" height="auto" src="../../public/СПАНЧ.png">-->
      <img @click="modal=true" width="10%" height="auto" src="../../public/СПАНЧ.png">
          <modal-window v-if="modal" @submit="modal=false">
              <ReservationForm :foo="modal"></ReservationForm>
          </modal-window>
  </div>
</template>

<script>
    import ModalWindow from '../components/ModalWindow'
    import ReservationForm from '../components/ReservationForm'

export default {
    name: 'home',
    components: {
        ModalWindow,
        ReservationForm
    },
    data() {
        return {
            modal:true
        }
    }
}

</script>
<style scoped>

</style>
