import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    podcasts: [
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        title: 'Так вышло',
        description: 'В каждом выпуске журналисты Андрей Бабицкий и Екатерина Кронгауз обсуждают сложные этические казусы',
        coverImgLink: 'cover2.png',
        host: {
          name: 'Матвей Григоренко',
          position: 'Ведущий',
          image: 'podcast-author.png',
        },
        staff: [
          {
            name: 'Артур Белостоцкий',
            position: 'Редактор',
          },
          {
            name: 'Артур Белостоцкий',
            position: 'Звукорежиссер',
          },
          {
            name: 'Ильдар Фаттахов',
            position: 'Продюсер',
          },
          {
            name: 'Алексей Зеленский',
            position: 'Композитор',
          },
        ],
        outerServices: [
          {
            id: 1,
            link: 'http://google-podcast/auch/podcast1',
            image: 'google-podcast.png',
          },
          {
            id: 2,
            link: 'http://google-podcast/auch/podcast1',
            image: 'google-podcast.png',
          },
          {
            id: 3,
            link: 'http://castbox/auch/podcast1',
            image: 'castbox.png',
          },
          {
            id: 4,
            link: 'http://google-podcast/auch/podcast1',
            image: 'google-podcast.png',
          },
        ],
        episodes: [
          {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            title: 'Нужна ли нам миссия? Разбираемся, кто мы и зачем',
            description: 'В предыдущем эпизоде мы обнаружили, что наши коллеги выгорают из-за неразберихи в процессах.',
            date: 1586110203,
            audioFileLink: 'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3',
          },
          {
            id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
            title: 'Выпуск №2',
            description: 'В предыдущем эпизоде мы обнаружили, что наши коллеги выгорают из-за неразберихи в процессах.',
            date: 1586110203,
            audioFileLink: 'https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3',
          },
        ],
      },
    ],
    posts: [
      {
        id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
        title: 'Время учёных',
        description: 'Вундеркинд, талантливый математик, выпускник Гарварда Тед Качинский мог бы всю жизнь писать статьи, понятные лишь десяти его коллегам, и преподавать студентам матанализ. Вместо этого он провёл двадцать лет в лесной хижине, стал маньяком-анархо-примитивистом...',
        text: 'string',
        date: 1586110203,
        coverImg: 'blog1.png',
        titleImg: 'blog-header-pic.png',
        staff: [
          {
            name: 'Ильдар Фаттахов',
            position: 'Текст и илюстрации',
          },
          {
            name: 'Алексей Зеленский',
            position: 'Редактор',
          },
          {
            name: 'Артур Белостоцкий',
            position: 'Иллюстрации',
          },
        ],
        illustrations: [
          {
            title: 'Тед Качинский',
            img: 'blog-illustration1.png',
          },
          {
            title: 'Тед Качинский',
            img: 'blog-illustration2.png',
          },
        ],
      },
    ],
    podcastsApi: null,
    postsApi: null,
  },
  getters: {
    PODCASTS: (state) => state.podcasts,
    POSTS: (state) => state.posts,
  },
  mutations: {
    SET_PODCASTS: (state, payload) => {
      state.podcastsApi = payload;
    },
    SET_POSTS: (state, payload) => {
      state.postsApi = payload;
    },
  },
  actions: {
    GET_PODCASTS: async (context) => {
      const { data } = await Axios.get('http://virtserver.swaggerhub.com/A7937/Auch/1.0.0/podcasts');
      context.commit('SET_PODCASTS', data);
    },
    GET_POSTS: async (context) => {
      const { data } = await Axios.get('http://virtserver.swaggerhub.com/A7937/Auch/1.0.0/posts');
      context.commit('SET_POSTS', data);
    },
  },
});
