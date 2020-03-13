<template>
  <div class="about-us">
    <h1 class="about-us_title">О нас</h1>
    <p class="about-us_text">
      Есть три основных способа зарабатывать на подкастах — это реклама в подкастах уже собравших
      свою аудиторию, подкасты, сделанные вместе с брендами и краудфандинг (когда аудитория так
      полюбила вас, что готова поддерживать деньгами). Конечно бывают еще и платные сервисы, которые
      распространяют подкасты за деньги. Но в России, где рынок пока только развивается, заработать
      таким образом непросто. Хотя есть и удачные примеры. Например, Arzamas распространяет свои
      подкасты через специальное приложение Радио. Арзамас.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped lang="scss">

.about-us {
  margin-bottom: 10%;

  &_title {
    text-align: center;
    position: relative;
    margin-bottom: 5%;

    &::before {
      content: '';
      position: absolute;
      height: .75rem;
      background-color: $colour-accent;
      width: 60%;
      border-radius: 1rem;
      left: 0;
      bottom: -1rem;
    }
  }

  &_text {
    width: 50%;
    margin: 0 auto;
    font-family: $font-family-Lora;
    font-size: $font-size-text;
  }
}

</style>
