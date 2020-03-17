
<template>
  <div class="footer">
    <div class="d-flex justify-between socials">
      <iconFacebook class="socials-item"/>
      <iconInstagram class="socials-item"/>
      <iconTelegram class="socials-item"/>
    </div>
    <div class="support-project d-flex justify-center">
      <a href="#" class="support-link">Хочешь поддержать проект?</a>
    </div>
  </div>
</template>

<script>
import iconFacebook from './icons/iconFacebook.vue';
import iconInstagram from './icons/iconInstagram.vue';
import iconTelegram from './icons/iconTelegram.vue';

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
  .footer {
    border-top: 4px solid $colour-accent;
  }

  .socials {
    width: 25%;
    margin: 0 auto;
    background-color: white;
    transform: translateY(-50%);
    padding: 0 4%;
  }

  .socials-item:nth-child(2) {
    margin: 0 6%;
  }

  .support-project {
    background-color: $colour-accent;
    margin-bottom: 2%;
  }

  .support-link {
    color: white;
    font-size: 2.25rem;
    line-height: 4rem;
    &:hover {
      color: black;
    }
  }


</style>
