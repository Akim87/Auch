<template>
  <div class="podcast d-flex flex-column">
    <div class="podcast_header d-flex justify-between">
      <span class="decoration_title">подкаст</span>
      <div class="podcast_author d-flex">
        <div class="podcast_author-info d-flex flex-column">
          <span class="podcast_author-position">Ведущий</span>
          <span class="podcast_author-name">Матвей Григоренко</span>
        </div>
        <img class="podcast_author-photo" src="../assets/podcast-author.png" alt="author photo">
      </div>
    </div>
    <div class="podcast_main d-flex justify-between">
      <div class="podcast_image" style="">
      </div>
      <div class="podcast_info">
        <h2 class="podcast_title">Так вышло</h2>
        <p class="podcast_description">
          В каждом выпуске журналисты Андрей Бабицкий и Екатерина Кронгауз обсуждают сложные
          этические казусы, меняющуюся мораль и странные ситуации, в которых оказываются современные
          люди. В каждом выпуске журналисты Андрей Бабицкий и Екатерина Кронгауз обсуждают сложные
          этические казусы, меняющуюся мораль и странные ситуации, в которых оказываются современные
          люди.
        </p>
      </div>
      <div class="podcast_staff d-flex flex-column">
        <div class="podcast_staff-item d-flex flex-column">
          <span class="podcast_staff-position">Редактор</span>
          <span class="podcast_staff-name">Артур Белостоцкий</span>
        </div>
        <div class="podcast_staff-item d-flex flex-column">
          <span class="podcast_staff-position">Звукорежиссер</span>
          <span class="podcast_staff-name">Артур Белостоцкий</span>
        </div>
        <div class="podcast_staff-item d-flex flex-column">
          <span class="podcast_staff-position">Продюсер</span>
          <span class="podcast_staff-name">Ильдар Фаттахов</span>
        </div>
        <div class="podcast_staff-item d-flex flex-column">
          <span class="podcast_staff-position">Композитор</span>
          <span class="podcast_staff-name">Алексей Зеленский</span>
        </div>
      </div>
    </div>
    <span class="ext-services_title">Слушайте в:</span>
    <div class="ext-services d-flex justify-center align-center">
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
    <div class="podcast_players-container">
      <span class="podcast_episodes-number">17 эпизодов</span>
      <audioPlayer class="podcast_players-item" />
      <audioPlayer class="podcast_players-item" />
      <audioPlayer class="podcast_players-item" />
      <audioPlayer class="podcast_players-item" />
      <audioPlayer class="podcast_players-item" />
      <audioPlayer class="podcast_players-item" />
      <audioPlayer class="podcast_players-item" />
    </div>
  </div>
</template>

<script>
import audioPlayer from './base/audioPlayer.vue';

export default {
  name: 'PodcastPage',
  components: {
    audioPlayer,
  },
  props: {
    podcast: Object,
  },
};
</script>

<style scoped lang="scss">
.decoration_title {
  background-color: $colour-accent;
  width: 50%;
  font-size: 2.25rem;
  color: white;
  border-radius: 0 1rem 1rem 0;
  line-height: 5rem;
  text-align: end;
  padding-right: 2%;
  display: block;
  align-self: flex-start;
}

.podcast {
  margin-bottom: 2%;

  &_author {
    width: 30vw;
    justify-content: center;
    border: .1875rem solid $colour-accent;
    border-right: none;
    padding: 1% 5% 1% 4%;
    border-radius: 75px 0 0 75px;
    &-info {
      margin-right: 5%;
      justify-content: center;
    }
    &-photo {
      width: 7vw;
    }
  }

  &_author-position {
    font-size: 2rem;
    font-weight: bold;
    color: #333333;
    display: block;
  }

  &_author-name {
    font-size: 1.5rem;
    display: block;
  }

  &_main {
    margin-top: 1%;
    position: relative;
  }

  &_image {
    top: -8vw;
    margin-left: 5%;
    position: relative;
    width: 25%;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(../assets/cover3.png);
    &::before {
      content: "";
      width: 140%;
      height: 4rem;
      border: .1875rem solid #FF9A3D;
      border-left: none;
      border-radius: 0 1rem 1rem 0;
      position: absolute;
      left: -30%;
      bottom: 0;
      z-index: -1;
    }
  }

  &_info {
    width: 35%;
  }

  &_title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2%;
  }

  &_description {
    font-family: $font-family-Lora;
    font-size: $font-size-text;
    margin-bottom: 3%;
  }

  &_staff {
    background-color: $colour-accent;
    width: 0%;
    border-radius: 1.5rem 0 0 1.5rem;
    padding: 2% 3%;
    margin-top: 4%;
    justify-content: space-around;
    height: 22vw;
    animation: bounce 3s linear infinite;
    transition: all .5s ease;
    overflow: hidden;
    &:hover {
      right: 0;
      animation: none;
      width: 20%;
      & > div {
        transform: scale(1);
        opacity: 1;
      }
    }
    &-item {
      opacity: 0;
      transition: all .3s linear;
      transform: scale(0);
    }
    &-position {
      font-size: 2rem;
      font-weight: bold;
      color: #333333;
    }
    &-name {
      font-size: $font-size-text;
      white-space: nowrap;
    }
  }

  &_players-item {
    width: 90%;
    margin: 0 auto 4%;
  }

  &_episodes-number {
    font-size: 2rem;
    border-bottom: 2px solid black;
    margin-bottom: 5%;
    display: block;
    width: 15%;
    text-align: end;
    padding-right: 1%;
    line-height: 3rem;
    font-weight: bold;
  }
}

.ext-services {
  border-top: .1875rem solid $colour-accent;
  border-bottom: .1875rem solid $colour-accent;
  padding: 0.5% 0;
  margin-bottom: 10%;
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
    filter: grayscale(1);
    &:hover {
      filter: none;
    }
  }
}

@keyframes cycle {
        35% {transform: translateX(0);}
        40% {transform: translateX(-4%);}
        45% {transform: translateX(-8%);}
        50% {transform: translateX(-4%);}
        55% {transform: translateX(-4%);}
        60% {transform: translateX(-8%);}
        65% {transform: translateX(-4%);}
        70% {transform: translateX(0);}
    }

@keyframes bounce {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}
</style>
