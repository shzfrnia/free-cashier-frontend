<template>
    <div :style="styles" class="license-viewer">
        <div class="wrap">
            <div class="content">
                <slot></slot>
                <div class="button-group">
                    <button @click="closeWindowDialog" class="btn">
                        CLOSE ME
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: "ModalWindow",
    data() {
      return {
        blockScreen: true
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
        this.blockScreen = false
        setTimeout(this.emit, 130)
      },
      emit(){
        this.$emit('submit')
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
        margin: 4% auto;
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
        width: 100%;
        height: 100%;
        z-index: 1;
        top: 0;
        right: 0;
    }
</style>