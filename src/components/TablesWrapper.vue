<template>
    <div>
        <div
                v-for="table in tables" :key="table.id"
                class="table"
                :class="[table.reservation == null ? 'free' : 'busy']"
            >{{table.size}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "TablesWrapper",
        props: {
            tables: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .table {
        width: 50px;
        height: 50px;
        display: inline-block;
    }

    .busy {
        background: #BE0031;
    }

    .free {
        background: green;
    }

</style>