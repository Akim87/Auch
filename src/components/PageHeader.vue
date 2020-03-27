<template>
  <FixedHeader>
    <div class="header">
      <nav class="d-flex justify-between header_menu">
        <ul class="d-flex justify-between header_menu-left-block">
          <li>
            <router-link to="/" v-scroll-to="'#podcasts'">Подкасты</router-link>
          </li>
          <li>
            <router-link to="/" v-scroll-to="'#whatsIsIt'">Что это такое?</router-link>
          </li>
          <li>
            <router-link to="/" v-scroll-to="'#popular'">Популярные</router-link>
          </li>
          <li>
            <router-link to="/" v-scroll-to="'#blog'">Блог</router-link>
          </li>
        </ul>
        <router-link class="header_logo-link" to="/"><img class="header_logo" src="~@/assets/Logo.png" alt="auch-logo" /></router-link>
        <ul class="d-flex justify-between header_menu-right-block">
          <li>
            <router-link to="/" v-scroll-to="'#aboutUs'">О нас</router-link>
          </li>
          <li>
            <router-link to="/" v-scroll-to="'#ourTeam'">Команда</router-link>
          </li>
          <li>
            <router-link to="/" v-scroll-to="'#contacts'">Контакты</router-link>
          </li>
          <li >
            <a href="#" @click="$emit('open')">Стать автором</a>
          </li>
        </ul>
      </nav>
    </div>
  </FixedHeader>
</template>

<script>
import FixedHeader from 'vue-fixed-header';

export default {
  name: 'PageHeader',
  components: {
    FixedHeader,
  },
};
</script>

<style scoped lang="scss">
.header.vue-fixed-header--isFixed {
  position: fixed;
  & .header_logo {
    width: 8vw;
  }
  & ul {
    margin-bottom: 0;
  }
}
.header {
  box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 999;
  &_menu {
    &-left-block,
    &-right-block {
      width: 100%;
      border-bottom: .1875rem solid $colour-accent;
      margin-bottom: 2rem;
      align-items: flex-end;
      font-size: 1.75rem;
      transition: all .3s ease;
      & li:hover {
        color: $colour-accent;
        position: relative;
        &::after {
          content: "";
          width: .625rem;
          height: .625rem;
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
    transition: all .3s ease;
    &-link {
      margin: 1% 3% 0;
    }
  }
}

</style>
