<template>
  <div class="blog">
    <div class="blog_header">
      <div class="blog_header-picture"></div>
    </div>
    <h1 class="title_underlined __left" v-if="$mq === 'sm'">Время учёных</h1>
    <div class="blog_staff d-flex flex-column justify-center">
      <div class="blog_staff-inner">
        <div class="blog_staff-item d-flex flex-column">
          <span class="blog_staff-position">Текст и илюстрации</span>
          <span class="blog_staff-name">Ильдар Фаттахов</span>
        </div>
        <div class="blog_staff-item d-flex flex-column">
          <span class="blog_staff-position">Редактор</span>
          <span class="blog_staff-name">Алексей Зеленский</span>
        </div>
        <div class="blog_staff-item d-flex flex-column">
          <span class="blog_staff-position">Иллюстрации</span>
          <span class="blog_staff-name">Артур Белостоцкий</span>
        </div>
      </div>
    </div>
    <div class="blog_main">
      <h1 class="title_underlined __left blog_main-title" v-if="$mq === 'lg'">Время ученых</h1>
      <article class="blog_main-text">
        <p>
          Днём 25 мая 1978 года на автостоянке Иллинойского университета в Чикаго появилась посылка
          без адресата, но с указанием отправителя: Бакли Крист, профессор материаловедения в
          Университете Норуэстерна в пригороде Чикаго. Поскольку доставлять её было некому, посылку
          вернули Кристу. Он, узнав об этом, заподозрил неладное, так как ничего не отправлял. Крист
          связался с отделением полиции при университетском кампусе. Как только офицер Терри Маркер
          открыл посылку, она взорвалась, повредив полицейскому левую руку.
        </p>
        <h3 class="blog_main-text-title">Событие сочли случайной аномалией</h3>
        <p>
          Отправителя коробки с бомбой не нашли, а через год, 9 мая 1979-го, случай повторился. На
          этот раз пострадал студент Университета Норуэстера Джон Харрис. Вскоре бомба похожей
          конструкции оказалась на борту «Боинга-727» компании American Airlines, летевшего из
          Чикаго в Вашингтон. Она могла бы уничтожить самолёт, но не взорвалась, хотя заполнила весь
          салон едким дымом, из-за чего экипажу пришлось срочно посадить судно. Только после этого
          ФБР занялось расследованием и обнаружило схожие черты в попытке подрыва самолёта и
          рассылке опасных коробок университетским сотрудникам. Дело назвали UNABOM (University and
          Airline Bomber — бомбист университетов и самолётов), а самого́ таинственного террориста в
          прессе стали называть Unabomber. Специалистам из Федерального бюро расследований долго не
          удавалось понять, кто совершает эти преступления. Пока они терялись в догадках, бомбы были
          доставлены ещё по 13 адресам, трое человек погибли, в двух случаях бомбу удалось
          обезвредить, в остальных не обошлось без травм: кому-то выбило глаз, кто-то потерял слух
          или пальцы на руках. Хотя некоторые бомбы были начинены щепками и гвоздями, они не были
          очень мощными и почему-то большинство их частей были деревянными. Днём 25 мая 1978 года на
          автостоянке Иллинойского университета в Чикаго появилась посылка без адресата, но с
          указанием отправителя: Бакли Крист, профессор материаловедения в Университете Норуэстерна
          в пригороде Чикаго. Поскольку доставлять её было некому, посылку вернули Кристу. Он, узнав
          об этом, заподозрил неладное, так как ничего не отправлял. Крист связался с отделением
          полиции при университетском кампусе. Как только офицер Терри Маркер открыл посылку, она
          взорвалась, повредив полицейскому левую руку.
        </p>
        <p>
          Событие сочли случайной аномалией, отправителя коробки с бомбой не нашли, а через год, 9
          мая 1979-го, случай повторился. На этот раз пострадал студент Университета Норуэстера Джон
          Харрис. Вскоре бомба похожей конструкции оказалась на борту «Боинга-727» компании American
          Airlines, летевшего из Чикаго в Вашингтон. Она могла бы уничтожить самолёт, но не
          взорвалась, хотя заполнила весь салон едким дымом, из-за чего экипажу пришлось срочно
          посадить судно. Только после этого ФБР занялось расследованием и обнаружило схожие черты в
          попытке подрыва самолёта и рассылке опасных коробок университетским сотрудникам. Дело
          назвали UNABOM (University and Airline Bomber — бомбист университетов и самолётов), а
          самого́ таинственного террориста в прессе стали называть Unabomber. Специалистам из
          Федерального бюро расследований долго не удавалось понять, кто совершает эти преступления.
          Пока они терялись в догадках, бомбы были доставлены ещё по 13 адресам, трое человек
          погибли, в двух случаях бомбу удалось обезвредить, в остальных не обошлось без травм:
          кому-то выбило глаз, кто-то потерял слух или пальцы на руках. Хотя некоторые бомбы были
          начинены щепками и гвоздями, они не были очень мощными и почему-то большинство их частей
          были деревянными
        </p>
        <p>
          Событие сочли случайной аномалией, отправителя коробки с бомбой не нашли, а через год, 9
          мая 1979-го, случай повторился. На этот раз пострадал студент Университета Норуэстера Джон
          Харрис. Вскоре бомба похожей конструкции оказалась на борту «Боинга-727» компании American
          Airlines, летевшего из Чикаго в Вашингтон. Она могла бы уничтожить самолёт, но не
          взорвалась, хотя заполнила весь салон едким дымом, из-за чего экипажу пришлось срочно
          посадить судно. Только после этого ФБР занялось расследованием и обнаружило схожие черты в
          попытке подрыва самолёта и рассылке опасных коробок университетским сотрудникам. Дело
          назвали UNABOM (University and Airline Bomber — бомбист университетов и самолётов), а
          самого́ таинственного террориста в прессе стали называть Unabomber. Специалистам из
          Федерального бюро расследований долго не удавалось понять, кто совершает эти преступления.
          Пока они терялись в догадках, бомбы были доставлены ещё по 13 адресам, трое человек
          погибли, в двух случаях бомбу удалось обезвредить, в остальных не обошлось без травм:
          кому-то выбило глаз, кто-то потерял слух или пальцы на руках. Хотя некоторые бомбы были
          начинены щепками и гвоздями, они не были очень мощными и почему-то большинство их частей
          были деревянными..
        </p>
      </article>
    </div>
    <div class="blog_aside d-flex flex-column justify-between">
      <div class="blog_podcast d-flex flex-column">
        <span class="decoration_title">подкаст</span>
        <div class="blog_podcast-cover">
          <router-link to="podcast">
            <img src="../assets/blog-podcast-cover.png" alt="podcast cover image" />
          </router-link>
        </div>
        <router-link to="podcast">
          <h2 class="blog_podcast-title">Одно расстройство</h2>
        </router-link>
      </div>
      <div class="blog_illustration-item d-flex flex-column align-center" v-if="$mq === 'lg'">
        <img
          class="blog_ilustration-pic"
          src="../assets/blog-illustration2.png"
          alt="blog illustration"
        />
        <span class="blog_ilustration-title">Тед Качинский</span>
      </div>
      <div class="blog_illustration-item d-flex flex-column align-center" v-if="$mq === 'lg'">
        <img
          class="blog_ilustration-pic"
          src="../assets/blog-illustration1.png"
          alt="blog illustration"
        />
        <span class="blog_ilustration-title">Тед Качинский</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogPage',
  props: {
    blog: Object,
  },
};
</script>

<style scoped lang="scss">
.blog {
  display: grid;
  grid-template-areas:
    "header staff"
    "main aside";
  grid-template-rows: 30vw 1fr;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2vw;
  @media screen and (max-width: $mq-mob) {
    grid-template-areas:
      "header"
      "title"
      "staff"
      "main"
      "aside";
    grid-template-rows: 27vh auto auto auto auto;
    grid-template-columns: auto;
    grid-gap: 1vw;
  }

  &_header {
    grid-area: header;

    &-picture {
      width: 56vw;
      height: 100%;
      margin-left: 5%;
      position: relative;
      background-image: url(../assets/blog-header-pic.png);
      background-size: contain;
      background-repeat: no-repeat;
      @media screen and (max-width: $mq-mob) {
        width: 85vw;
        margin-top: 5%;
      }

      &::after {
        content: "";
        position: absolute;
        height: 6rem;
        background-color: $colour-accent;
        width: 115%;
        border-radius: 1.5rem;
        right: 0px;
        top: -3rem;
        z-index: -1;
        left: -10%;
      }
    }
  }

  & .title_underlined {
    grid-area: title;
    align-self: baseline;
    text-align: start;
    padding-left: 5%;
    width: 50%;
    &::after {
      width: 100%;
    }
  }

  &_staff {
    grid-area: staff;
    align-items: center;
    @media screen and (max-width: $mq-mob) {
      align-items: baseline;
      margin-left: 5%;
    }

    &-item {
      margin-bottom: 10%;
      @media screen and (max-width: $mq-mob) {
        margin-bottom: 5%;
      }
    }

    &-position {
      font-size: 2rem;
      font-weight: bold;
      color: #333333;
    }
    &-name {
      font-size: $font-size-text;
    }
  }
  &_main {
    grid-area: main;
    @media screen and (max-width: $mq-mob) {
      margin-bottom: 10%;
    }

    &-title {
      text-align: start;
      padding-left: 5%;
    }

    &-text {
      margin-left: 5%;
      font-size: 1.75rem;
      font-family: $font-family-Lora;
      line-height: 2.25rem;
      @media screen and (max-width: $mq-mob) {
        margin-right: 5%;
      }
      &-title {
        margin-top: 10%;
      }
      & > p {
        margin-top: 4%;
      }
    }
  }
  &_aside {
    grid-area: aside;
  }
  &_podcast {
    &-cover {
      border: 0.1875rem solid $colour-accent;
      border-radius: 0.75rem 0 0 0.75rem;
      margin: 0 0 4% 4%;
      padding: 5%;
      @media screen and (min-width: $mq-mob) {
        border-right: none;
      }
      @media screen and (max-width: $mq-mob) {
        border-left: none;
        border-radius: 0 0.75rem 0.75rem 0;
        margin: 0 auto 5% 0;
        padding: 3% 3% 3% 10%;
      }
      & img {
        width: 22vw;
        display: block;
        transition: ease-out 0.2s;
        @media screen and (max-width: $mq-mob) {
          width: 47vw;
        }
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    &-title {
      font-size: 2.625rem;
      font-weight: bold;
      padding-left: 10%;
      &:hover {
        color: $colour-accent;
      }
    }
  }
  &_ilustration {
    &-pic {
      width: 21vw;
      margin-bottom: 2%;
    }
    &-title {
      font-size: 1.625rem;
    }
  }
}

.decoration_title {
  background-color: $colour-accent;
  font-size: 2.25rem;
  color: white;
  border-radius: 1rem 0 0 1rem;
  line-height: 4rem;
  padding-left: 10%;
  display: block;
  margin-bottom: 4%;
  @media screen and (max-width: $mq-mob) {
    width: 90%;
    margin-left: auto;
  }
}
</style>
