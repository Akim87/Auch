<template>
  <div id="app">
    <PageHeader/>
    <AboutUs/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import AboutUs from './components/AboutUs.vue';
import PageFooter from './components/PageFooter.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    AboutUs,
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
