<template>
    <div :style="styles" class="license-viewer" @click="closeWindowDialog">
        <div class="wrap">
            <div class="content">
                <slot>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "ModalWindow",
    data() {
      return {
        blockScreen: this.$store.state.blockScreen
      }
    },
    computed: {
      styles() {
        const styles = {}
        styles['background-color'] = this.blockScreen ? 'rgba(66, 70, 62, 0.77)' : 'rgba(0, 0, 0, 0)'
        return styles
      }
    },
    methods: {
      closeWindowDialog() {
        this.$store.state.blockScreen = false
        this.blockScreen = this.$store.state.blockScreen
        setTimeout(this.emit, 130)
      },
      emit(){
        this.$store.state.showModalWindow = false
      }
    }
  }
</script>

<style scoped>
    .button-group {
        display: flex;
    }

    .button-group .btn {
        margin: 0px;
        width: 100px;
    }

    .wrap {
        margin: 80px auto;
        padding: 10px;
        width: 70%;
        position: relative;
        background: #F5F9FC;
    }

    .content {
        padding: 10px;
    }

    .license-viewer {
        transition: 0.6s;
        position: fixed;
        background-color: rgba(66, 70, 62, 0.77);
        justify-content: center;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
</style>