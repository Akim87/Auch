<template>
  <div class="podcast d-flex flex-column">
    <div class="podcast_main">
      <span class="decoration_title">подкаст</span>
      <div class="podcast_author d-flex">
        <div class="podcast_author-info d-flex flex-column">
          <span class="podcast_author-position">Ведущий</span>
          <span class="podcast_author-name">Матвей Григоренко</span>
        </div>
        <img class="podcast_author-photo" src="../assets/podcast-author.png" alt="author photo" />
      </div>
      <div class="podcast_image-holder" style="">
        <img class="podcast_image" src="../assets/cover2.png" alt="" />
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
    <extServices/>
    <div class="podcast_players-container">
      <span class="podcast_episodes-number">17 эпизодов</span>
      <audioPlayer class="podcast_players-item" />
    </div>
  </div>
</template>

<script>
import audioPlayer from './base/audioPlayer.vue';
import extServices from './base/externalServicesBlock.vue';

export default {
  name: 'PodcastPage',
  components: {
    audioPlayer,
    extServices,
  },
  props: {
    podcast: Object,
  },
};
</script>

<style scoped lang="scss">
.decoration_title {
  grid-area: decor;
  background-color: $colour-accent;
  width: 80%;
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
  &_main {
    margin: 1% 0 3%;
    position: relative;
    display: grid;
    grid-template-areas:
      "decor decor author"
      "pic info staff";
    grid-template-rows: auto auto;
    grid-template-columns: 30vw auto 25vw;
    grid-gap: 2vw;
    @media screen and (max-width: $mq-mob) {
      grid-template-areas:
        "decor decor"
        "pic author"
        "staff staff"
        "info info";
      grid-template-rows: auto auto 12vh auto;
      grid-template-columns: 50% 50%;
      grid-gap: 1vw;
    }
  }

  &_image-holder {
    grid-area: pic;
    top: -6vw;
    margin-left: 15%;
    position: relative;
    height: fit-content;
    @media screen and (min-width: $mq-mob) {
      top: -8vw;
      margin-left: 5%;
      &::before {
        content: "";
        width: 130%;
        height: 4rem;
        border: 0.1875rem solid #ff9a3d;
        border-left: none;
        border-radius: 0 1rem 1rem 0;
        position: absolute;
        left: -30%;
        bottom: -1rem;
        z-index: -1;
      }
    }
  }

  &_image {
    width: 27vw;
    @media screen and (max-width: $mq-mob) {
      width: 35vw;
    }
  }

  &_author {
    grid-area: author;
    justify-content: center;
    border: 0.1875rem solid $colour-accent;
    border-right: none;
    padding: 1% 5% 1% 4%;
    border-radius: 75px 0 0 75px;
    @media screen and (max-width: $mq-mob) {
      align-self: center;
      padding: 5%;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
    &-info {
      margin-right: 5%;
      justify-content: center;
    }
    &-photo {
      width: 7vw;
      @media screen and (max-width: $mq-mob) {
        width: 10vw;
        margin-right: 5%;
      }
    }
    &-position {
      font-size: 2rem;
      font-weight: bold;
      color: #333333;
      display: block;
    }
    &-name {
      font-size: 1.5rem;
      display: block;
    }
  }

  &_info {
    grid-area: info;
    margin: 2% 0;
    @media screen and (max-width: $mq-mob) {
      width: 80%;
      margin: 0 auto;
    }
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
    grid-area: staff;
    @media screen and (min-width: $mq-mob) {
      justify-self: end;
      background-color: $colour-accent;
      width: 20%;
      border-radius: 1.5rem 0 0 1.5rem;
      padding: 3% 10%;
      margin-top: 4%;
      justify-content: space-around;
      animation: rubberBand 3s ease-out infinite;
      transition: width 0.5s ease;
      overflow: hidden;
      &:hover {
        right: 0;
        animation: none;
        width: 80%;
        & > div {
          transform: scale(1);
          opacity: 1;
        }
      }
      &-item {
        opacity: 0;
        transition: all 0.3s linear;
        transform: scale(0);
      }
    }
    @media screen and (max-width: $mq-mob) {
      flex-wrap: wrap;
      width: 80%;
      margin: 0 auto;
      &-item {
        height: 50%;
        align-self: baseline;
      }
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

  &_players-container {
    margin-top: 5%;
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
    @media screen and (max-width: $mq-mob) {
      width: 30%;
    }
  }
}

@keyframes cycle {
  50% {
    transform: scaleX(0.5);
  }
}

@keyframes rubberBand {
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1, 0.8, 1);
  }

  40% {
    transform: scale3d(1, 1.1, 1);
  }

  50% {
    transform: scale3d(1, 0.9, 1);
  }

  65% {
    transform: scale3d(1, 1.05, 1);
  }

  75% {
    transform: scale3d(1, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}
</style>
