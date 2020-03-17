<template>
  <div class="podcast d-flex flex-column">
    <span class="decoration_title">подкаст</span>
    <div class="podcast_block d-flex">
      <img class="podcast_image" src="../assets/cover1.png" alt="podcast image" />
      <div class="podcast_info">
        <h2 class="podcast_title">65 Интуитивное питание: почему диеты не работают</h2>
        <p class="podcast_description">
          В этом выпуске мы говорим о диетах и желании похудеть. Объясняем о том, почему диеты
          никогда не работают и что не так с нашими взаимоотношениями с едой. А также рассказываем,
          почему мы сами отказались от диет и почему перешли на интуитивное питание.
        </p>
        <audioPlayer/>
      </div>
    </div>
    <div class="ext-services d-flex justify-center align-center">
      <span>Слушайте в:</span>
      <a href="#">
        <img src="../assets/Castbox_logo 1.png" alt="service-logo" />
      </a>
      <a href="#">
        <img src="../assets/google-podcasts-logo 1.png" alt="service-logo" />
      </a>
      <a href="#">
        <img src="../assets/PngItem_1884034 1.png" alt="service-logo" />
      </a>
      <a href="#">
        <img src="../assets/Spotify_Logo_CMYK_Green 1.png" alt="service-logo" />
      </a>
    </div>
  </div>
</template>

<script>
import audioPlayer from './base/audioPlayer.vue';

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
  font-size: 2.375rem;
  color: white;
  border-radius: 0 1rem 1rem 0;
  line-height: 4rem;
  text-align: end;
  padding-right: 2%;
}

.podcast {
  margin-bottom: 4%;

  &_block {
    margin: 0 4%;
  }

  &_image {
    position: relative;
    top: -10%;
    width: 22vw;
    height: fit-content;
  }
  &_info {
    margin: 3% 0% 2% 2%;
  }

  &_title {
    font-size: 2.25rem;
    font-weight: bold;
    margin-bottom: 2%;
  }

  &_description {
    font-family: $font-family-Lora;
    font-size: $font-size-text;
  }
}

.ext-services {
  border-top: 3px solid $colour-accent;
  border-bottom: 3px solid $colour-accent;
  padding: 0.5% 0;
  & > * {
    margin-right: 3%;
  }
  & span {
    font-size: 1.5rem;
  }
  & img {
    vertical-align: middle;
    filter: grayscale(1);
    &:hover {
      filter: none;
    }
  }
}
</style>
