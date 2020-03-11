<template>
  <div>
<simple-svg
  :src="'@/assets/icons/facebook.svg'"
  fill-class-name="fill-to-change"
  :fill="svgFillColor"
  stroke-class-name="stroke-to-change"
  :stroke="svgFillColor"
  width="100%"
  height="100%"
  custom-id="my-id"
  custom-class-name="my-class"
  @load="svgLoaded()"
/>
  </div>
</template>

<script>
export default {
  name: 'PageFooter',
};

</script>

<style scoped lang="scss">

</style>
