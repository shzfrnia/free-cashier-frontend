<template>
    <div :style="styles" class="license-viewer">
        <div class="wrap">
            <div class="content">
                <h3>Лuцензионное соглашение</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan.
                    Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sit amet luctus venenatis lectus magna.
                    Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Turpis egestas sed tempus urna et.
                    Eget duis at tellus at urna condimentum mattis. Morbi non arcu risus quis. Sagittis id consectetur purus
                    ut faucibus pulvinar. Libero justo laoreet sit amet. Cursus turpis massa tincidunt dui ut ornare lectus sit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan.
                    Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sit amet luctus venenatis lectus magna.
                    Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Turpis egestas sed tempus urna et.
                    Eget duis at tellus at urna condimentum mattis. Morbi non arcu risus quis. Sagittis id consectetur purus
                    ut faucibus pulvinar. Libero justo laoreet sit amet. Cursus turpis massa tincidunt dui ut ornare lectus sit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan.
                    Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sit amet luctus venenatis lectus magna.
                    Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Turpis egestas sed tempus urna et.
                    Eget duis at tellus at urna condimentum mattis. Morbi non arcu risus quis. Sagittis id consectetur purus
                    ut faucibus pulvinar. Libero justo laoreet sit amet. Cursus turpis massa tincidunt dui ut ornare lectus sit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan.
                    Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sit amet luctus venenatis lectus magna.
                    Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Turpis egestas sed tempus urna et.
                    Eget duis at tellus at urna condimentum mattis. Morbi non arcu risus quis. Sagittis id consectetur purus
                    ut faucibus pulvinar. Libero justo laoreet sit amet. Cursus turpis massa tincidunt dui ut ornare lectus sit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan.
                    Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sit amet luctus venenatis lectus magna.
                    Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Turpis egestas sed tempus urna et.
                    Eget duis at tellus at urna condimentum mattis. Morbi non arcu risus quis. Sagittis id consectetur purus
                    ut faucibus pulvinar. Libero justo laoreet sit amet. Cursus turpis massa tincidunt dui ut ornare lectus sit.</p>
                <div class="button-group">
                    <button @click="closeWindowDialog" class="btn" label="Я прочитал и согласен с правилами"></button>
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
        margin-top: 0px;
        padding: 10px;
        width: 70%;
        height: 600px;
        background: #F5F9FC;
    }

    .content {
        position: absolute;
        height: 100%;
        padding: 10px;
        overflow: auto;
    }

    .license-viewer {
        transition: 0.6s;
        position: fixed;
        display: flex;
        background-color: rgba(66, 70, 62, 0.77);
        justify-content: center;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
</style>