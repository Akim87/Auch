<template>
  <div class="ext-services d-flex justify-center align-center">
    <span class="ext-services_title">Слушайте в:</span>
    <a href="#">
      <img src="../../assets/castbox.png" alt="service-logo" />
    </a>
    <a href="#">
      <img src="../../assets/google-podcasts.png" alt="service-logo" />
    </a>
    <a href="#">
      <img src="../../assets/overcast.png" alt="service-logo" />
    </a>
    <a href="#">
      <img src="../../assets/spotify.png" alt="service-logo" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'extServices',
  props: {
    extServices: Array,
  },
};
</script>

<style scoped lang="scss">
.ext-services {
  border-top: 0.1875rem solid $colour-accent;
  border-bottom: 0.1875rem solid $colour-accent;
  padding: .5% 0;
  & > * {
    margin-right: 4%;
  }
  &_title {
    font-size: 2.25rem;
    margin-left: 7%;
    line-height: 4rem;
  }
  & img {
    vertical-align: middle;
    width: 7vw;
    transition: all 1s ease;
    flex-wrap: wrap;
    filter: grayscale(1);
    &:hover {
      filter: none;
    }
    @media screen and (max-width: $mq-mob) {
      width: 15vw;
    }
  }
}
</style>
