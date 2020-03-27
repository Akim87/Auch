<template>
  <div class="blog">
    <h1 class="title-underlined-right">Блог</h1>
    <div class="blog_container">
      <blogItem
        v-for="blog in blogs"
        :img="blog.img"
        :title="blog.title"
        :text="blog.text"
        :key="blog.id"
        class="blog_item"
      />
    </div>
  </div>
</template>

<script>
import blogItem from './base/blogItem.vue';

export default {
  name: 'BlogBlock',
  components: {
    blogItem,
  },
  data() {
    return {
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
};
</script>

<style scoped lang="scss">
.blog {

  &_container {
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
}

.blog_item:nth-child(1) {
  grid-area: col;
  display: flex;
  flex-direction: column;
}

.blog_item:nth-child(2) {
  grid-area: row1;
  flex-direction: row-reverse;
}

.blog_item:nth-child(3) {
  grid-area: row2;
}
</style>
