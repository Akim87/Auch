<template>
  <div class="popular-podcasts">
    <h1 class="title-underlined-right">Популярные</h1>
    <Hooper class="popular-podcasts_slider" ref="carousel" :settings="hooperSettings">
      <Slide>
        <img class="popular-podcasts_img" src="../assets/blog1.png" alt />
      </Slide>
      <Slide>
        <img class="popular-podcasts_img" src="../assets/blog2.png" alt />
      </Slide>
      <Slide>
        <img class="popular-podcasts_img" src="../assets/blog3.png" alt />
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
      hooperSettings: {
        itemsToShow: 1.5,
        centerMode: true,
        infiniteScroll: true,
        autoPlay: true,
        breakpoints: {
          640: {
            centerMode: false,
            itemsToShow: 2.5,
          },
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.popular-podcasts {
  & .title-underlined-right::after {
    width: 70%;
  }
  &_slider {
    position: relative;
    &::after {
      content: "";
      width: 20%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 80%;
      background: linear-gradient(to right, hsla(0, 0%, 100%, 0), #ffffff 100%);
    }
    @media screen and (max-width: $mq-mob) {
      &::before {
        content: "";
        width: 20%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 80%;
        background: linear-gradient(to left, hsla(0, 0%, 100%, 0), #ffffff 100%);
        z-index: 1;
      }
    }
  }
  &_img {
    width: 95%;
  }
}
</style>
