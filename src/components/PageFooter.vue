
<template>
  <div class="footer">
    <div class="d-flex justify-between socials">
      <a href="#"><iconFacebook class="socials-item"/></a>
      <a href="#"><iconInstagram class="socials-item"/></a>
      <a href="#"><iconTelegram class="socials-item"/></a>
    </div>
    <div class="support-project d-flex justify-center">
      <router-link to="/support-project-page" class="support-link">Хочешь поддержать проект?</router-link>
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
    border-top: .25rem solid $colour-accent;
    margin-top: 10%;
  }

  .socials {
    width: 25%;
    margin: 0 auto;
    background-color: white;
    transform: translateY(-50%);
    padding: 0 4%;
    &-item {
      height: auto;
      width: 5vw;
      &:nth-child(2) {
      margin: 0 6%;
      }
    }
  }

  .support-project {
    background-color: $colour-accent;
    margin-bottom: 2%;
  }

  .support-link {
    color: white;
    font-size: 2.25rem;
    line-height: 4rem;
    transition: all 0.5s ease;
    &:hover {
      color: black;
    }
  }


</style>
