<template>
  <div id="app">
    <PageHeader  />
    <PodcastBlock name='podcasts'/>
    <BlogBlock name='blog'/>
    <AboutUs name='aboutUs'/>
    <OurTeam name='team'/>
    <PageFooter name='contacts'/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import PodcastBlock from './components/PodcastBlock.vue';
import BlogBlock from './components/BlogBlock.vue';
import AboutUs from './components/AboutUs.vue';
import OurTeam from './components/OurTeam.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    PodcastBlock,
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
</style>
