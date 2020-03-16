<template>
  <vue-audio :file="file1" />
</template>

<script>
import VueAudio from 'vue-audio';

export default {
  name: 'audioPlayer2',
  data() {
    return {
      file1: 'https://s1.muzter.net/files/mp3/artik__asti_-_devochka_tancui_muzter.net_128.mp3',
    };
  },
  components: {
    'vue-audio': VueAudio,
  },
};
</script>

<style scoped lang="scss">
</style>
