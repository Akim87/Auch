<template>
  <FixedHeader>
    <div class="header">
      <nav class="d-flex justify-between header_menu" v-if="$mq === 'lg'">
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
            <router-link to="/" v-scroll-to="'#blogs'">Блог</router-link>
          </li>
        </ul>
        <router-link class="header_logo-link" to="/" v-scroll-to="'#header'"
          ><img class="header_logo" src="~@/assets/Logo.png" alt="auch-logo"
        /></router-link>
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
          <li>
            <a href="#" @click.prevent="$emit('open')">Стать автором</a>
          </li>
        </ul>
      </nav>
      <div class="header-mob d-flex flex-column align-center" v-if="$mq === 'sm'">
        <router-link to="/">
          <img class="header_logo" src="~@/assets/Logo.png" alt="auch-logo" />
        </router-link>
        <button class="header-mob_menu-button" @click.prevent="showMobMenu = !showMobMenu">
          Меню
        </button>
      </div>
      <transition name="dropdown">
        <nav class="d-flex justify-around header-mob_menu" v-if="showMobMenu">
          <ul
            class="d-flex flex-column justify-around header-mob_menu-left-block"
            v-on:click="showMobMenu = false"
          >
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
              <router-link to="/" v-scroll-to="'#blogs'">Блог</router-link>
            </li>
          </ul>
          <ul
            class="d-flex flex-column justify-around header-mob_menu-right-block"
            v-on:click="showMobMenu = false"
          >
            <li>
              <router-link to="/" v-scroll-to="'#aboutUs'">О нас</router-link>
            </li>
            <li>
              <router-link to="/" v-scroll-to="'#ourTeam'">Команда</router-link>
            </li>
            <li>
              <router-link to="/" v-scroll-to="'#contacts'">Контакты</router-link>
            </li>
            <li>
              <a href="#" @click.prevent="$emit('open')">Стать автором</a>
            </li>
          </ul>
        </nav>
      </transition>
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
  data() {
    return {
      showMobMenu: false,
    };
  },
};
</script>

<style scoped lang="scss">
.header.vue-fixed-header--isFixed {
  & .header_logo {
    width: 8vw;
    @media screen and (max-width: $mq-mob) {
      width: 0vw;
    }
  }
  & ul {
    margin-bottom: 0;
  }
}
.header {
  box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;
  z-index: 999;
  &_menu {
    &-left-block,
    &-right-block {
      width: 100%;
      border-bottom: 0.1875rem solid $colour-accent;
      margin-bottom: 2rem;
      align-items: flex-end;
      font-size: 1.5rem;
      transition: all 0.5s ease;
      & li {
        transition: all 0.5s ease;
        &:hover {
          color: $colour-accent;
          position: relative;
          &::after {
            content: "";
            width: 0.625rem;
            height: 0.625rem;
            background-color: $colour-accent;
            position: absolute;
            top: -70%;
            right: 50%;
            border-radius: 5px;
            transform: translateX(50%);
          }
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
    transition: all 0.5s ease;
    &-link {
      margin: 1% 3% 0;
    }
  }

  &-mob {
    border-bottom: 0.25rem solid $colour-accent;
    margin-bottom: 3%;

    &_menu-button {
      transform: translateY(50%);
      background-color: white;
      padding: 0 5%;
      color: $colour-accent;
    }

    &_menu {
      position: absolute;
      width: 90%;
      left: 5%;
      background-color: $colour-accent;
      height: 30vh;
      border-radius: 0px 0px 22px 22px;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
      & li {
        font-size: 2rem;
        color: white;
      }
    }
  }
}
</style>
