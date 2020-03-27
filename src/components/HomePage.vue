<template>
  <main id="podcasts">
    <PodcastBlock />
    <PodcastBlock />
    <div class="semi-columns-block d-flex justify-between">
      <WhatIs id="whatsIsIt" />
      <PopularPodcasts id="popular" />
    </div>
    <BlogBlock id="blog" />
    <AboutUs id="aboutUs" />
    <OurTeam id="ourTeam" />
  </main>
</template>

<script>
import PodcastBlock from './PodcastBlock.vue';
import WhatIs from './WhatIs.vue';
import PopularPodcasts from './PopularPodcasts.vue';
import BlogBlock from './BlogBlock.vue';
import AboutUs from './AboutUs.vue';
import OurTeam from './OurTeam.vue';

export default {
  name: 'Home',
  components: {
    PodcastBlock,
    WhatIs,
    PopularPodcasts,
    BlogBlock,
    AboutUs,
    OurTeam,
  },
};
</script>

<style lang="scss">
.semi-columns-block {
  margin: 10% 0;
  @media screen and (max-width: $mq-mob) {
    flex-direction: column;
  }
}

.semi-columns-block > * {
  &:nth-child(1) {
    width: 40%;
  }
  &:nth-child(2) {
    width: 50%;
  }
  @media screen and (max-width: $mq-mob) {
    &:nth-child(1) {
      width: 100%;
    }
    &:nth-child(2) {
      width: 100%;
    }
  }
}
</style>
