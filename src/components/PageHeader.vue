<template>
  <nav class="d-flex justify-between header">
    <ul class="d-flex justify-between menu menu-left">
      <li><a href="">Подкасты</a></li>
      <li><a href="">Что это такое?</a></li>
      <li><a href="">Популярные</a></li>
      <li><a href="">Блог</a></li>
    </ul>
    <img src="~@/assets/Logo.png" alt="auch-logo">
    <ul class="d-flex justify-between menu menu-right">
      <li><a href="">О нас</a></li>
      <li><a href="">Команда</a></li>
      <li><a href="">Контакты</a></li>
      <li><a href="">Стать автором</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PageHeader',
};
</script>

<style scoped lang="scss">
  .header {
    box-shadow: 4px 4px 50px rgba(0, 0, 0, 0.25);
  }

  .menu {
    max-width: 40%;
    width: 100%;
    border-bottom: 3px solid $colour-accent;
    margin-bottom: 2rem;
    align-items: flex-end;
    font-size: 1.5rem;
  }

  .menu-left {
    padding: 0 2% 0 4%;
  }

  .menu-right {
    padding: 0 4% 0 2%;
  }

</style>
