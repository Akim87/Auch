<template>
  <div id="app">
    <PageHeader  />
    <PodcastBlock name='podcasts'/>
    <div class="semi-columns-block d-flex justify-between">
      <WhatIs name='whatsIsIt'/>
      <PopularPodcasts name='popular'/>
    </div>
    <BlogBlock name='blog'/>
    <AboutUs name='aboutUs'/>
    <OurTeam name='team'/>
    <PageFooter name='contacts'/>
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
