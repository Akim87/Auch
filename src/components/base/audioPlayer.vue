<template>
  <div class='player'>
    <span>Total duration: {{ Math.floor(duration / 60 * 100) / 100 }} seconds</span>
    <span>Progress: {{  Math.floor((duration / 60) * progress * 100 ) /100 }}</span>
    <button @click="togglePlayback">{{ playing ? 'Pause' : 'Play' }}</button>
    <button @click="stop">Stop</button>
    <input type="range" id="volume" :min="progress" :max="duration">
  </div>
</template>

<script>
import VueHowler from 'vue-howler';

export default {
  mixins: [VueHowler],
};
</script>

<style scoped lang="scss">

</style>
