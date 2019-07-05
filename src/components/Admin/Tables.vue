<template>
    <div class="containter">
        <div id="legend" class="row">
            <div class="table-id item">
                №
            </div>
            <div class="client-name item">
                Количество мест (стульев)
            </div>
        </div>
        <div :key="table.id" v-for="table in getTables()" class="row">
            <div class="table-id item">
                {{table.id}}
            </div>
            <div class="client-name item">
                {{table.size | formatSize}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Tables",
    methods: {
        getTables() {
          return this.$store.state.tables
        }
    },
    filters: {
      formatSize(value) {
        if(value >= 2 && value <= 4) {
          return `${value} местa`
        }
        if (value >=5 && value <= 10)
          return `${value} мест`
      }
    }
  }
</script>

<style scoped>
    #legend:hover {
        background: none;
        box-shadow: none;
    }

    .containter {
        width: 100%;
        overflow: auto;
    }

    .row {
        display: flex;
        position: relative;
        margin: 10px;
        height: 50px;
        transition: .2s;
        border-bottom: 1px solid black;
    }

    .row:hover {
        /*background:  #d8aeba;*/
        box-shadow: 0 0 10px black;
    }

    .row :last-child {
        border: none;
    }

    .item {
        display: flex;
        /*border-right: 1px solid black;*/
        justify-content: center;
        align-items: center;
    }


    .table-id {
        min-width: 50px;
    }

    .client-name {
        flex-grow: 1;
    }

    .time {
        min-width: 70px;
    }

    .delete-field {
        min-width: 50px;
    }

    .delete-btn {
        outline: none;
        border-radius: 10px;
        height: 70%;
        width: 70%;
        transition: .11s;
    }

    .delete-btn:active {
        background: red;
    }

</style>