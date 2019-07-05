<template>
    <div class="containter">
        <div id="legend" class="row">
            <div class="table-id item">
                №
            </div>
            <div class="client-name item">
                Имя клиента
            </div>
            <div class="time item">
                Время
            </div>
            <div class="delete-field item">
                X
            </div>
        </div>
        <div :key="i" v-for="i in foo" class="row">
            <div class="table-id item">
                {{i*2}}
            </div>
            <div class="client-name item">
                {{i*3}}
            </div>
            <div class="time item">
                {{i*4}}
            </div>
            <div class="delete-field item">
                <button class="delete-btn"><i class="fas fa-trash" aria-hidden="true"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Reservations",
    data() {
      return {
        foo: [
          1,2,3,4,5,6,7,1,1,1,1,1,1,1,1,1,1,1,1,1,1
        ]
      }
    }
  }
</script>

<style scoped>
    #legend:hover {
        background: #c2c0dc;
    }

    .containter {
        width: 100%;
        overflow: auto;
    }

    .row {
        display: flex;
        position: relative;
        margin: 1px;
        /*border-radius: 10px;*/
        border: 1px solid black;
        background: #c2c0dc;
        height: 50px;
        transition: .2s;
    }

    .row:hover {
        background:  #d8aeba;
    }

    .row :last-child {
        border: none;
    }

    .item {
        display: flex;
        border-right: 1px solid black;
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