import '@/styles/main.scss';
import Vue from 'vue';
import Router from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import VueMq from 'vue-mq';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import PodcastPage from './components/PodcastPage.vue';
import BlogPage from './components/BlogPage.vue';
import SupportProjectPage from './components/SupportProjectPage.vue';
import PageNotFound from './components/PageNotFound.vue';

Vue.use(Router);
Vue.use(VueScrollTo, {
  duration: 500,
  offset: -150,
});

Vue.use(VueMq, {
  breakpoints: {
    sm: 640,
    lg: Infinity,
  },
});

Vue.config.productionTip = true;

const router = new Router({
  mode: 'history',
  scrollBehavior() {
    return document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/podcast',
      name: 'podcast',
      component: PodcastPage,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogPage,
    },
    {
      path: '/support-project-page',
      name: 'support-project-page',
      component: SupportProjectPage,
    },
    {
      path: '/page-not-found',
      name: 'page-not-found',
      component: PageNotFound,
    },
    {
      path: '*',
      redirect: '/page-not-found',
    },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
