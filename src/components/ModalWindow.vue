<template>
    <div :style="styles" class="license-viewer">
        <transition name="bounce">
            <div v-if="showModal" class="wrap">
                <div class="content">
                    <slot></slot>
                    <div class="button-group">
                        <button @click="closeWindowDialog" class="btn">
                            CLOSE ME
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

  export default {
    name: "ModalWindow",
    data() {
      return {
        blockScreen: true,
        showModal: false
      }
    },
    created() {
      setTimeout(this.showModalDialog, 130)
    },
    computed: {
      styles() {
        const styles = {}
        styles['background-color'] = this.blockScreen ? 'rgba(66, 70, 62, 0.77)' : 'rgba(0, 0, 0, 0)'
        return styles
      }
    },
    methods: {
      showModalDialog() {
        this.showModal = true
      },
      closeWindowDialog() {
        this.blockScreen = false
        setTimeout(this.emit, 130)
      },
      emit() {
        this.showModal = false
        setTimeout(this.foo, 600)
        // this.$emit('submit')
      },
      foo() {
        this.$emit('submit')
      }
    }
  }
</script>

<!--BOUNCE ANIMATION-->
<style scoped>
    .bounce-enter-active {
        animation: bounce-in .7s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.20);
        }
        100% {
            transform: scale(1);
        }
    }

</style>

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
        transition: .6s;
        position: fixed;
        background-color: rgba(0, 0, 0, 0);
        justify-content: center;
        width: 100%;
        height: 100%;
        right: 0;
        top:0;
        z-index: 1;
    }
</style>