
<template>
  <div class="d-flex justify-between socials">
    <iconFacebook/>
    <iconInstagram/>
    <iconTelegram/>
  </div>
</template>

<script>
import iconFacebook from './base/iconFacebook.vue';
import iconInstagram from './base/iconInstagram.vue';
import iconTelegram from './base/iconTelegram.vue';

export default {
  name: 'PageFooter',
  components: {
    iconFacebook,
    iconInstagram,
    iconTelegram,
  },
};

</script>

<style scoped lang="scss">
  .socials {
    width: 20%;
    margin: 0 auto;
    position: relative;
  }

</style>
