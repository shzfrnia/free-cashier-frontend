<template>
  <div>
      <example-component-with-porops message="HELLO WORLD"></example-component-with-porops>
  </div>
</template>

<script>
    import ExampleComponentWithPorops from '../components/ExampleComponentWithProps'

export default {
  name: 'home',
  components: {
    ExampleComponentWithPorops
  }
}
</script>
