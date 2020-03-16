<template>
  <div id="app">
    <PageHeader/>
    <PodcastBlock/>
    <AboutUs/>
    <OurTeam/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PodcastBlock from './components/PodcastBlock.vue';
import AboutUs from './components/AboutUs.vue';
import OurTeam from './components/OurTeam.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    PodcastBlock,
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
</style>
