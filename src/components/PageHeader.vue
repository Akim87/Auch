<template>
  <div>
    <nav class="d-flex justify-between header">
      <ul class="d-flex justify-between menu menu-left">
        <li><a href="#">Подкасты</a></li>
        <li><a href="#">Что это такое?</a></li>
        <li><a href="#">Популярные</a></li>
        <li><a href="#">Блог</a></li>
      </ul>
      <img src="~@/assets/Logo.png" alt="auch-logo">
      <ul class="d-flex justify-between menu menu-right">
        <li><a href="#">О нас</a></li>
        <li><a href="#">Команда</a></li>
        <li><a href="#">Контакты</a></li>
        <li><a href="#" @click="showPopup = true">Стать автором</a></li>
      </ul>
    </nav>
    <transition name="fade">
      <BecomeAuthorPopup v-if="showPopup" @close="showPopup = false"/>
    </transition>
  </div>
</template>

<script>
import BecomeAuthorPopup from './BecomeAuthorPopup.vue';

export default {
  name: 'PageHeader',
  components: {
    BecomeAuthorPopup,
  },
  data() {
    return {
      showPopup: false,
    };
  },
};

</script>

<style scoped lang="scss">
  .header {
    box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
    margin-bottom: 6%;
  }

  .menu {
    max-width: 40%;
    width: 100%;
    border-bottom: 3px solid $colour-accent;
    margin-bottom: 2rem;
    align-items: flex-end;
    font-size: 1.5rem;
    & li:hover {
      border-bottom: 3px solid black;
    }
  }

  .menu-left {
    padding: 0 2% 0 4%;
  }

  .menu-right {
    padding: 0 4% 0 2%;
  }

  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
