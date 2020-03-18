<template>
  <div class="header">
    <nav class="d-flex justify-between header_menu">
      <ul class="d-flex justify-between header_menu-left-block">
        <li>
          <a href="#podcasts">Подкасты</a>
        </li>
        <li>
          <a href="#whatsIsIt">Что это такое?</a>
        </li>
        <li>
          <a href="#popular">Популярные</a>
        </li>
        <li>
          <a href="#blog">Блог</a>
        </li>
      </ul>
      <a href="#">
        <img class="header_logo" src="~@/assets/Logo.png" alt="auch-logo" />
      </a>
      <ul class="d-flex justify-between header_menu-left-block">
        <li>
          <a href="#aboutUs">О нас</a>
        </li>
        <li>
          <a href="#team">Команда</a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
        <li>
          <a href="#" @click="showPopup = true">Стать автором</a>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <BecomeAuthorPopup v-if="showPopup" @close="showPopup = false" />
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
  &_menu {
    box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
    margin-bottom: 6%;

    &-left-block,
    &-rigth-block {
      max-width: 40%;
      width: 100%;
      border-bottom: 3px solid $colour-accent;
      margin-bottom: 2rem;
      align-items: flex-end;
      font-size: 1.5rem;
      & li:hover {
        color: $colour-accent;
        position: relative;
        &::after {
          content: "";
          width: 10px;
          height: 10px;
          background-color: $colour-accent;
          position: absolute;
          top: -70%;
          right: 50%;
          border-radius: 5px;
          transform: translateX(50%);
        }
      }
    }
    &-left-block {
      padding: 0 2% 0 4%;
    }
    &-right-block {
      padding: 0 4% 0 2%;
    }
  }
  &_logo {
    width: 12vw;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
