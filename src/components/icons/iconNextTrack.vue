<template>
  <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.66 10.9064C22.3169 11.2909 22.3204 12.2393 21.6663 12.6287L7.75897 20.9084C7.0938 21.3044 6.25032 20.827 6.24747 20.0529L6.18697 3.59825C6.18412 2.82415 7.02407 2.34043 7.69213 2.73143L21.66 10.9064Z" fill="#FF9A3D"/>
    <path d="M33.3985 10.9064C34.0554 11.2909 34.0589 12.2393 33.4048 12.6287L19.4975 20.9084C18.8323 21.3044 17.9888 20.827 17.986 20.0529L17.9255 3.59825C17.9226 2.82415 18.7626 2.34043 19.4307 2.73143L33.3985 10.9064Z" fill="#0D0D0D"/>
  </svg>
</template>

<script>
export default {
  name: 'iconNextTrack',
};
</script>

<style scoped lang="scss">
svg {
  & path:nth-child(2) {
    transition: all 0.5s ease;
  }
  &:hover path:nth-child(2) {
    fill: $colour-accent;
  }
}
</style>
