<template>
  <main>
    <div id="podcasts" class="podcasts_block">
      <podcastItem />
      <podcastItem />
      <button class="show-more">
        Показать больше
        <dropDownArrow class="show-more_button" />
      </button>
    </div>
    <div class="semi-columns-block d-flex justify-between">
      <WhatIs id="whatsIsIt" />
      <PopularPodcasts id="popular" />
    </div>
    <div id="blogs" class="blogs_block">
      <h1 v-bind:class="[$mq === 'lg' ? titleUunderlinedRight : titleUunderlinedRight]">Блог</h1>
      <div class="blogs_inner-desk" v-if="$mq === 'lg'">
        <blogItem v-for="blog in blogs" v-bind="blog" :key="blog.id" class="blogs_item-desk" />
      </div>
      <Hooper
        class="blogs_inner-mob"
        ref="carousel"
        v-if="$mq === 'sm'"
        :infiniteScroll="true"
        :itemsToShow="1.5"
        :centerMode="true"
      >
        <Slide v-for="blog in blogs" :key="blog.id">
          <blogItem v-bind="blog" class="blogs_item-mob" />
        </Slide>
      </Hooper>
    </div>
    <AboutUs id="aboutUs" />
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
import podcastItem from './base/podcastItem.vue';
import dropDownArrow from './base/dropDownArrow.vue';
import WhatIs from './WhatIs.vue';
import PopularPodcasts from './PopularPodcasts.vue';
import blogItem from './base/blogItem.vue';
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
      blogs: [
        {
          id: 1,
          img: 'blog1.png',
          title: 'Возвращение луи Си Кея',
          text:
            'Вундеркинд, талантливый математик, выпускник Гарварда Тед Качинский мог бы всю жизнь писать статьи, понятные лишь десяти его коллегам, и преподавать студентам матанализ. Вместо этого он провёл двадцать лет в лесной хижине, стал маньяком-анархо-примитивистом...',
        },
        {
          id: 2,
          img: 'blog2.png',
          title: 'Время учёных',
          text:
            'Вундеркинд, талантливый математик, выпускник Гарварда Тед Качинский мог бы всю жизнь писать статьи, понятные лишь десяти его коллегам, и преподавать студентам матанализ. Вместо этого он провёл двадцать лет в лесной хижине, стал маньяком-анархо-примитивистом...',
        },
        {
          id: 3,
          img: 'blog3.png',
          title: 'Мы сейчас комики для комиков',
          text:
            'Вундеркинд, талантливый математик, выпускник Гарварда Тед Качинский мог бы всю жизнь писать статьи, понятные лишь десяти его коллегам, и преподавать студентам матанализ. Вместо этого он провёл двадцать лет в лесной хижине, стал маньяком-анархо-примитивистом...',
        },
      ],
    };
  },
  name: 'Home',
  components: {
    Hooper,
    Slide,
    podcastItem,
    dropDownArrow,
    WhatIs,
    PopularPodcasts,
    blogItem,
    AboutUs,
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
.podcasts_block,
.blogs_block {
  margin-bottom: 10%;
}

.show-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-size: $font-size-text;
  &_button {
    margin-top: 10%;
    transform: scale(1.25);
  }
}

.semi-columns-block {
  margin: 10% 0;
  @media screen and (max-width: $mq-mob) {
    flex-direction: column;
  }
  & > * {
    margin-bottom: 10%;
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
}
.blogs {
  &_inner {
    &-desk {
      display: grid;
      grid-template-areas:
        "col row1"
        "col row2";
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 2fr;
      grid-gap: 1vw;
      width: 90%;
      margin: 0 auto 10%;
    }
    &-mob {
      position: relative;
      &::after,
      &::before {
        content: "";
        width: 20%;
        height: 100%;
        position: absolute;
        top: 0;
      }
      &::after {
        left: 80%;
        background: linear-gradient(to right, hsla(0, 0%, 100%, 0), #ffffff 100%);
      }
      &::before {
        right: 80%;
        background: linear-gradient(to left, hsla(0, 0%, 100%, 0), #ffffff 100%);
        z-index: 1;
      }
    }
  }
  &_item {
    &-desk {
      &:nth-child(1) {
        grid-area: col;
        flex-direction: column;
        & .blog-item_info {
          align-items: center;
        }
      }
      &:nth-child(2) {
        grid-area: row1;
        flex-direction: row-reverse;
      }
      &:nth-child(3) {
        grid-area: row2;
      }
    }
    &-mob {
      flex-direction: column;
      margin: 0 5%;
      height: 100%;
      & .blog-item_img {
        width: 100%;
      }
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
