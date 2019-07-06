<template>
    <div>
        <reservation-form :show-select-table="true"></reservation-form>
    </div>
</template>

<script>
    import ReservationForm from '../ReservationForm'

  export default {
    name: "Reservation",
    components: {
      ReservationForm
    }
  }
</script>

<style scoped>

</style>