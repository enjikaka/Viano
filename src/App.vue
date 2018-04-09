<template>
  <div id="app">
    <la-cucaracha></la-cucaracha>
    <pi-song></pi-song>
  </div>
</template>

<script>
import LaCucaracha from './examples/LaCucaracha.vue'
import PiSong from './examples/PiSong.vue'

export default {
  name: 'app',
  components: {
    LaCucaracha,
    PiSong
  }
}
</script>

<style scoped>

</style>
