<template>
  <div class="page404 d-flex flex-column">
    <img class="page404_img" src="../assets/404.png"/>
    <div class="page404_info d-flex flex-column">
      <h1 class="page404_title">Не найдено (404)</h1>
      <span class="page404_text">Запрашиваемая вами страница недоступна :(</span>
      <router-link to="/" class="page404_link">Вернуться на домашнюю страницу</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhatIs',
};
</script>

<style scoped lang="scss">
  .page404 {
    &_img {
      align-self: center;
      width: 60%;
    }
    &_info {
      align-items: center;
    }

    &_title {
      font-size: 2.25rem;
      margin-bottom: 1%;
    }
    &_text {
      font-size: 1.5rem;
      margin-bottom: 2%;
    }
    &_link {
      font-size: 1.5rem;
      color: $colour-accent;
      &:hover {
        color: black;
      }
    }
  }
</style>
