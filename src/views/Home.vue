<template>
  <div>
      <img @click="$emit('spange-bob')" width="10%" height="auto" src="../../public/СПАНЧ.png">
<!--      <img @click="tables" width="10%" height="auto" src="../../public/СПАНЧ.png">-->
      <tables-wrapper :tables="foo()"></tables-wrapper>
  </div>
</template>

<script>
    import TablesWrapper from '../components/TablesWrapper'

export default {
    name: 'home',
    components: {
        TablesWrapper
    },
    data() {
        return {
            tablesFetchInterval: null,
            tables: this.$store.state.tables
        }
    },
    methods: {
        foo() {
            const result = this.$store.state.tables
            return result
        }
    },
    computed: {

    },
    async created() {
        await this.$store.dispatch('fetchTables','0')
        this.tablesFetchInterval = window.setInterval(() => this.$store.dispatch('fetchTables','0'), 5000)
    },
    beforeRouteLeave(to, from, next) {
        window.clearInterval(this.tablesFetchInterval)
        next()
    }
}

</script>
<style scoped>

</style>
