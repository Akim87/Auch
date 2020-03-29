<template>
  <div id="app">
    <PageHeader id="header" @open="showBecomeAuthorPopup = true" />
    <router-view class="main" />
    <PageFooter id="contacts" />
    <transition name="fade">
      <BecomeAuthorPopup v-if="showBecomeAuthorPopup" @close="showBecomeAuthorPopup = false" />
    </transition>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PageFooter from './components/PageFooter.vue';
import BecomeAuthorPopup from './components/BecomeAuthorPopup.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter,
    BecomeAuthorPopup,
  },
  data() {
    return {
      showBecomeAuthorPopup: false,
      podcastsToShow: 2,
      blogsToShow: 2,
      podcasts: [
        {
          id: 1,
        },
        {
          id: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  flex-grow: 1;
  justify-content: center;
  margin-top: 13%;
  @media screen and (max-width: $mq-mob) {
    margin-top: 20%;
  }
}
</style>
