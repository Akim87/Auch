<template>
  <div class="what-is">
    <h1 class="title-underlined-left">Что такое подкасты?</h1>
    <p class="what-is_text">
      Подкасты — это как Youtube, только аудио. Такие регулярные программы, сериалы или блоги,
      которые можно скачивать или слушать онлайн. Сам термин «подкастинг» придумали в 2004 году,
      скрестив слова iPod и broadcasting — «радиовещание».
    </p>
  </div>
</template>

<script>
export default {
  name: 'WhatIs',
};
</script>

<style scoped lang="scss">
.what-is {
  & .title-underlined-left::after {
    width: 100%;
    @media screen and (max-width: $mq-mob) {
      width: 70%;
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
</style>
