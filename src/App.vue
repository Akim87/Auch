<template>
  <div id="app">
    <PageHeader @open="showBecomeAuthorPopup = true" />
    <transition name="fade">
      <main v-if="!showSupportProjectPopup">
        <PodcastBlock name="podcasts" />
        <div class="semi-columns-block d-flex justify-between">
          <WhatIs name="whatsIsIt" />
          <PopularPodcasts name="popular" />
        </div>
        <BlogBlock name="blog" />
        <AboutUs name="aboutUs" />
        <OurTeam name="team" />
      </main>
    </transition>
    <transition name="fade">
      <SupportProjectPopup v-if="showSupportProjectPopup" @close="showSupportProjectPopup = false"/>
    </transition>
    <PageFooter name="contacts" @open="showSupportProjectPopup = true" />
    <transition name="fade">
      <BecomeAuthorPopup v-if="showBecomeAuthorPopup" @close="showBecomeAuthorPopup = false" />
    </transition>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PodcastBlock from './components/PodcastBlock.vue';
import WhatIs from './components/WhatIs.vue';
import PopularPodcasts from './components/PopularPodcasts.vue';
import BlogBlock from './components/BlogBlock.vue';
import AboutUs from './components/AboutUs.vue';
import OurTeam from './components/OurTeam.vue';
import PageFooter from './components/PageFooter.vue';
import BecomeAuthorPopup from './components/BecomeAuthorPopup.vue';
import SupportProjectPopup from './components/SupportProjectPopup.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    PodcastBlock,
    WhatIs,
    PopularPodcasts,
    BlogBlock,
    AboutUs,
    OurTeam,
    PageFooter,
    BecomeAuthorPopup,
    SupportProjectPopup,
  },
  data() {
    return {
      showBecomeAuthorPopup: false,
      showSupportProjectPopup: false,
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: $font-family-IstokWeb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.semi-columns-block > * {
  &:nth-child(1) {
    width: 40%;
  }
  &:nth-child(2) {
    width: 50%;
  }
}
</style>
