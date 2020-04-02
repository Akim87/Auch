<template>
  <main id="podcasts">
    <PodcastBlock />
    <PodcastBlock />
    <div class="semi-columns-block d-flex justify-between">
      <WhatIs id="whatsIsIt" />
      <PopularPodcasts id="popular" />
    </div>
    <BlogBlock id="blog" />
    <AboutUs id="aboutUs" />

    <!-- OUR TEAM SLIDER -->

    <div class="our-team">
      <h1 class="title-underlined-right">Наша команда</h1>
      <Hooper ref="carousel" :infiniteScroll="true" :itemsToShow="2">
        <Slide
          class="our-team_group d-flex justify-around"
          v-for="item in teamItems"
          :key="item.name"
        >
          <TeamItem :item="item"></TeamItem>
        </Slide>
      </Hooper>
      <button class="our-team_next-group" @click.prevent="slideNext"></button>
    </div>
  </main>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import PodcastBlock from './PodcastBlock.vue';
import WhatIs from './WhatIs.vue';
import PopularPodcasts from './PopularPodcasts.vue';
import BlogBlock from './BlogBlock.vue';
import AboutUs from './AboutUs.vue';
import TeamItem from './base/TeamItem.vue';

export default {
  data() {
    return {
      teamItems: [
        {
          photo: 'team-photo1.png',
          name: 'Екатерина Кронгауз',
          description:
            'Работала на телеканале "Дождь", возглавляла издание snob.ru, создала отдел подкастов в "ауч"',
          contacts: {
            instagram: '',
            vk: '',
          },
        },
        {
          photo: 'team-photo2.png',
          name: 'Лика Кремер',
          description:
            'Работала на телеканале "Дождь", возглавляла издание snob.ru, создала отдел подкастов в "ауч"',
          contacts: {
            instagram: '',
            vk: '',
          },
        },
        {
          photo: 'team-photo2.png',
          name: 'Лика Кремер',
          description:
            'Работала на телеканале "Дождь", возглавляла издание snob.ru, создала отдел подкастов в "ауч"',
          contacts: {
            instagram: '',
            vk: '',
          },
        },
        {
          photo: 'team-photo2.png',
          name: 'Лика Кремер',
          description:
            'Работала на телеканале "Дождь", возглавляла издание snob.ru, создала отдел подкастов в "ауч"',
          contacts: {
            instagram: '',
            vk: '',
          },
        },
      ],
    };
  },
  name: 'Home',
  components: {
    PodcastBlock,
    WhatIs,
    PopularPodcasts,
    BlogBlock,
    AboutUs,
    Hooper,
    Slide,
    TeamItem,
  },
  methods: {
    slideNext() {
      this.$refs.carousel.slideNext();
    },
  },
};
</script>

<style lang="scss">
.semi-columns-block {
  margin: 10% 0;
  @media screen and (max-width: $mq-mob) {
    flex-direction: column;
  }
}

.semi-columns-block > * {
  &:nth-child(1) {
    width: 40%;
  }
  &:nth-child(2) {
    width: 50%;
  }
  @media screen and (max-width: $mq-mob) {
    &:nth-child(1) {
      width: 100%;
    }
    &:nth-child(2) {
      width: 100%;
    }
  }
}

.our-team {
  position: relative;

  &_next-group {
    margin: 1%;
    position: absolute;
    top: 50%;
    right: 3%;
    &::after,
    &::before {
      content: "";
      background-color: $colour-accent;
      height: 3px;
      width: 20px;
      position: absolute;
    }
    &::before {
      transform: rotate(-55deg);
      top: 7px;
    }
    &::after {
      transform: rotate(55deg);
      top: -7px;
    }
  }

  &_item {
    margin: 0 4%;
  }

  &_member-photo {
    align-self: baseline;
    width: 11vw;
  }

  &_member-info {
    width: 60%;
    margin-left: 4%;
  }

  &_member-name {
    font-weight: bold;
    font-size: 2.25rem;
    margin-bottom: 2%;
  }

  &_member-contacts-item {
    width: 11%;
    margin: 4% 4% 0 0;
    height: auto;
  }

  &_member-charge {
    font-family: $font-family-Lora;
    font-size: $font-size-text;
    line-height: 2.5rem;
  }
}
</style>
