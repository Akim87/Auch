<template>
  <div class="podcast d-flex flex-column">
    <span class="decoration_title">подкаст</span>
    <div class="podcast_block d-flex">
      <router-link class="podcast_link" to="podcast">
        <img class="podcast_image" src="../../assets/cover1.png" alt="podcast image" />
      </router-link>
      <div class="podcast_info">
        <router-link to="podcast">
          <h2 class="podcast_title">65 Интуитивное питание: почему диеты не работают</h2>
          </router-link>
        <p class="podcast_description">
          В этом выпуске мы говорим о диетах и желании похудеть. Объясняем о том, почему диеты
          никогда не работают и что не так с нашими взаимоотношениями с едой. А также рассказываем,
          почему мы сами отказались от диет и почему перешли на интуитивное питание.
        </p>
      </div>
      <audioPlayer class="podcast_player"/>
    </div>
    <div class="ext-services d-flex justify-center align-center">
      <span>Слушайте в:</span>
      <a href="#">
        <img src="../../assets/Castbox_logo 1.png" alt="service-logo" />
      </a>
      <a href="#">
        <img src="../../assets/google-podcasts-logo 1.png" alt="service-logo" />
      </a>
      <a href="#">
        <img src="../../assets/PngItem_1884034 1.png" alt="service-logo" />
      </a>
      <a href="#">
        <img src="../../assets/Spotify_Logo_CMYK_Green 1.png" alt="service-logo" />
      </a>
    </div>
  </div>
</template>

<script>
import audioPlayer from './audioPlayer.vue';

export default {
  name: 'PodcastBlock',
  components: {
    audioPlayer,
  },
  props: {
    podcastImageUrl: String,
    podcastTitle: String,
    podcastDescription: String,
  },
};
</script>

<style scoped lang="scss">
.decoration_title {
  background-color: $colour-accent;
  width: 40%;
  font-size: 2.25rem;
  color: white;
  border-radius: 0 1rem 1rem 0;
  line-height: 4rem;
  text-align: end;
  padding-right: 2%;
  @media screen and (max-width: $mq-mob) {
      width: 50%;
    }
}

.podcast {
  margin-bottom: 2%;

  &_block {
    margin: 0 4% 2%;
    display: grid;
    grid-template-areas:
      "pic info"
      "pic play";
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 3fr;
    grid-gap: 2vw;
    @media screen and (max-width: $mq-mob) {
      grid-template-areas:
      "pic info"
      "play play";
    }
    & > a {
      grid-area: pic;
    }
  }

  &_link {
    height: fit-content;
  }

  &_image {
    position: relative;
    top: -2rem;
    width: 23vw;
    align-self: baseline;
    transition: ease-out 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
  &_info {
    grid-area: info;
  }

  &_title {
    font-size: 2rem;
    font-weight: bold;
    margin: 4% 0 2%;
    transition: all 0.5s ease;
    &:hover {
      color: $colour-accent;
    }
  }

  &_description {
    font-family: $font-family-Lora;
    font-size: $font-size-text;
    margin-bottom: 1%;
  }

  &_player {
    grid-area: play;
  }
}

.ext-services {
  border-top: .1875rem solid $colour-accent;
  border-bottom: .1875rem solid $colour-accent;
  padding: 0.5% 0;
  & > * {
    margin-right: 3%;
  }
  & span {
    font-size: 1.5rem;
  }
  & img {
    vertical-align: middle;
    width: 7vw;
    transition: all 1s ease;
    filter: grayscale(1);
    &:hover {
      filter: none;
    }
  }
}
</style>
