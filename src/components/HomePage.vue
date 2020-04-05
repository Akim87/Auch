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
      <div id="whatsIsIt" class="what-is">
        <h1 class="title_underlined __left">Что такое подкасты?</h1>
        <p class="what-is_text">
          Подкасты — это как Youtube, только аудио. Такие регулярные программы, сериалы или блоги,
          которые можно скачивать или слушать онлайн. Сам термин «подкастинг» придумали в 2004 году,
          скрестив слова iPod и broadcasting — «радиовещание».
        </p>
      </div>
      <div class="popular-podcasts">
        <h1 class="title_underlined">Популярные</h1>
        <Hooper class="popular-podcasts_slider" ref="carousel" :settings="popularBlockSlider">
          <Slide v-for="podcast in podcasts" :key="podcast.id">
            <router-link to="podcast">
              <img
                class="popular-podcasts_img"
                :src="require(`../assets/${podcast.img}`)"
                alt="podcast cover"
              />
            </router-link>
          </Slide>
        </Hooper>
      </div>
    </div>
    <div id="blogs" class="blogs_block">
      <h1 class="title_underlined" v-bind:class="{ __left: $mq === 'sm' }">Блог</h1>
      <div class="blogs_inner-desk" v-if="$mq === 'lg'">
        <blogItem v-for="blog in blogs" v-bind="blog" :key="blog.id" class="blogs_item-desk" />
      </div>
      <button class="show-more" v-if="$mq === 'lg'">
        Показать больше
        <dropDownArrow class="show-more_button" />
      </button>
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
    <div id="aboutUs" class="about-us">
      <h1 class="title_underlined" v-bind:class="{ __left: $mq === 'lg' }">О нас</h1>
      <p class="about-us_text">
        Есть три основных способа зарабатывать на подкастах — это реклама в подкастах уже собравших
        свою аудиторию, подкасты, сделанные вместе с брендами и краудфандинг (когда аудитория так
        полюбила вас, что готова поддерживать деньгами). Конечно бывают еще и платные сервисы,
        которые распространяют подкасты за деньги. Но в России, где рынок пока только развивается,
        заработать таким образом непросто. Хотя есть и удачные примеры. Например, Arzamas
        распространяет свои подкасты через специальное приложение Радио. Арзамас.
      </p>
    </div>
    <div class="our-team">
      <h1 class="title_underlined" v-bind:class="{ __left: $mq === 'sm' }">Наша команда</h1>
      <Hooper ref="carousel" :settings="teamBlockSlider">
        <Slide class="our-team_item d-flex justify-around" v-for="item in teamItems" :key="item.id">
          <teamItem v-bind="item"></teamItem>
        </Slide>
      </Hooper>
      <button class="our-team_next-group" @click.prevent="slideNext"></button>
    </div>
  </main>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import podcastItem from './base/podcastItem.vue';
import dropDownArrow from './base/dropDownArrow.vue';
import blogItem from './base/blogItem.vue';
import teamItem from './base/teamItem.vue';

export default {
  name: 'Home',
  components: {
    Hooper,
    Slide,
    podcastItem,
    dropDownArrow,
    blogItem,
    teamItem,
  },
  data() {
    return {
      teamItems: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
          photo: 'team-photo3.png',
          name: 'Лика Кремер',
          description:
            'Работала на телеканале "Дождь", возглавляла издание snob.ru, создала отдел подкастов в "ауч"',
          contacts: {
            instagram: '',
            vk: '',
          },
        },
        {
          id: 4,
          photo: 'team-photo4.png',
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
      podcasts: [
        {
          id: 1,
          img: 'cover1.png',
          title: 'Возвращение луи Си Кея',
          text:
            'Вундеркинд, талантливый математик, выпускник Гарварда Тед Качинский мог бы всю жизнь писать статьи, понятные лишь десяти его коллегам, и преподавать студентам матанализ. Вместо этого он провёл двадцать лет в лесной хижине, стал маньяком-анархо-примитивистом...',
        },
        {
          id: 2,
          img: 'cover2.png',
          title: 'Время учёных',
          text:
            'Вундеркинд, талантливый математик, выпускник Гарварда Тед Качинский мог бы всю жизнь писать статьи, понятные лишь десяти его коллегам, и преподавать студентам матанализ. Вместо этого он провёл двадцать лет в лесной хижине, стал маньяком-анархо-примитивистом...',
        },
      ],
      popularBlockSlider: {
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
      teamBlockSlider: {
        itemsToShow: 1,
        infiniteScroll: true,
        breakpoints: {
          640: {
            itemsToShow: 2,
            itemsToSlide: 2,
          },
        },
      },
    };
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
.blogs_block,
.about-us {
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

.what-is {
  & .title_underlined::after {
    width: 100%;
    @media screen and (max-width: $mq-mob) {
      width: 80%;
    }
  }
  &_text {
    width: 70%;
    margin: 10% auto 0;
    font-size: $font-size-text;
    @media screen and (max-width: $mq-mob) {
      width: 90%;
    }
  }
}

.popular-podcasts {
  & .title_underlined::after {
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
      margin: 0 auto 2%;
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

.about-us {
  &_text {
    width: 50%;
    margin: 0 auto;
    font-family: $font-family-Lora;
    font-size: $font-size-text;
    @media screen and (max-width: $mq-mob) {
      width: 90%;
    }
  }
}

.our-team {
  position: relative;
  & .title_underlined {
    margin-bottom: 5%;
    @media screen and (max-width: $mq-mob) {
    margin-bottom: 10%;
  }
    &::after {
      @media screen and (max-width: $mq-mob) {
        width: 70%;
      }
    }
  }
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
}
</style>
