<template>
  <div class="podcast d-flex flex-column">
    <span class="decoration_title">подкаст</span>
    <div class="podcast_block d-flex">
      <router-link class="podcast_link" :to="{ name: 'podcast', params: { podcastId: id }}">
        <img class="podcast_image" v-lazy="coverImgLink" alt="podcast image" />
      </router-link>
      <div class="podcast_info">
        <router-link :to="{ name: 'podcast', params: { podcastId: id }}">
          <h2 class="podcast_title">{{ title }}</h2>
          </router-link>
        <p class="podcast_description">
          {{ description }}
        </p>
      </div>
      <audioPlayer v-bind="episodes[0]" class="podcast_player"/>
    </div>
    <extServices/>
  </div>
</template>

<script>
import audioPlayer from './audioPlayer.vue';
import extServices from './externalServicesBlock.vue';

export default {
  name: 'PodcastBlock',
  components: {
    audioPlayer,
    extServices,
  },
  props: {
    id: String,
    title: String,
    description: String,
    coverImgLink: String,
    episodes: Array,
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
    position: relative;
    top: -2rem;
  }

  &_image {
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

</style>
