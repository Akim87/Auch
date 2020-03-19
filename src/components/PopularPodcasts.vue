<template>
  <div class="popular-podcasts">
    <h1 class="title-underlined-right">Популярные</h1>
    <Hooper ref="carousel" :infiniteScroll="true" :itemsToShow="2.5" :autoPlay="true">
      <Slide>
        <img class="popular-podcasts_img" src="../assets/Rectangle 63.png" alt="">
      </Slide>
      <Slide>
        <img class="popular-podcasts_img" src="../assets/Rectangle 74.png" alt="">
      </Slide>
      <Slide>
        <img class="popular-podcasts_img" src="../assets/Rectangle 75.png" alt="">
      </Slide>
    </Hooper>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'PopularPodcasts',
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          img: '../assets/Rectangle 63.png',
        },
        {
          id: 2,
          img: '../assets/Rectangle 74.png',
        },
        {
          id: 3,
          img: '../assets/Rectangle 75.png',
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
  .popular-podcasts {
    & .title-underlined-right::after {
    width: 70%;
  }
  &_img {
    width: 95%;
  }
}
</style>
