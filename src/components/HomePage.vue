<template>
  <main>
    <div id="podcasts" class="podcasts_block">
      <podcastItem />
      <podcastItem />
      <button class="show-more">Показать больше<dropDownArrow class="show-more_button" /></button>
    </div>
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
import podcastItem from './base/podcastItem.vue';
import dropDownArrow from './base/dropDownArrow.vue';
import WhatIs from './WhatIs.vue';
import PopularPodcasts from './PopularPodcasts.vue';
import BlogBlock from './BlogBlock.vue';
import AboutUs from './AboutUs.vue';
import OurTeam from './OurTeam.vue';

export default {
  name: 'Home',
  components: {
    podcastItem,
    dropDownArrow,
    WhatIs,
    PopularPodcasts,
    BlogBlock,
    AboutUs,
    OurTeam,
  },
};
</script>

<style lang="scss">
.podcasts_block {
  margin-bottom: 10%;
}

.show-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-size: $font-size-text;
  &_button {
    margin-top: 10%;
    transform: scale(1.25);
  }
}

.semi-columns-block {
  @media screen and (max-width: $mq-mob) {
    flex-direction: column;
  }
}

.semi-columns-block > * {
  margin-bottom: 10%;
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
