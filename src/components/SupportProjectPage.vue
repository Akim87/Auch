<template>
  <div class="support-page d-flex flex-column">
    <router-link to="/" class="support-page_close">свернуть</router-link>
    <div class="support-page_info">
      <p class="support-page_text">
        Если вам нравится слушать подкасты и вам хочется поддержать развитие этого проекта, это
        можно сделать следующими способами:
      </p>
      <h1 class="support-page_title">Рассказать о подкасте друзьям</h1>
      <p class="support-page_text">
        Поделитесь информацией про подкаст в своих социальных сетях. Если вы хотите пошерить ссылку,
        то можно оставить ссылку на сайт подкаста http://podcastvremyaperemen.ru или на ссылку для
        подписки c телефона: https://pod.link/vremyaperemen. Не забудьте про хештег
        #подкаствремяперемен
      </p>
      <h1 class="support-page_title">Поддержать деньгами</h1>
      <p class="support-page_text">
        Если вы хотите сказать проекту спасибо, то у меня есть страничка на Патреоне. В любой момент
        эту поддержку можно приостановить или изменить сумму. О том, что такое Патреон можно
        посмотреть в видео на странице самого Патреона.
      </p>
      <p class="support-page_text">
        Такая поддержка помогает мне развиваться профессионально, оплачивать хостинговые сервисы,
        оборудование для записи подкастов, а также возможность больше времени уделять проекту.
      </p>
      <baseButton buttonText="Поддержать"/>
    </div>
  </div>
</template>

<script>
import baseButton from './base/baseButton.vue';

export default {
  name: 'SupportProjectPage',
  components: {
    baseButton,
  },
};
</script>

<style scoped lang="scss">
.support-page {
  &_close {
    width: 15%;
    align-self: flex-end;
    border: .1875rem solid $colour-accent;
    border-right: none;
    border-radius: 1rem 0 0 1rem;
    font-size: 1.5rem;
    text-align: left;
    padding: 0 2%;
    line-height: 3rem;
    margin-bottom: 1%;
  }
  &_info {
    width: 65%;
    margin: 0 auto;
  }
  &_text {
    font-size: $font-size-text;
    font-family: $font-family-Lora;
    &:nth-of-type(1){
      margin-bottom: 6%;
    }
    &:nth-of-type(2){
      margin-bottom: 10%;
    }
    &:nth-of-type(3){
      margin-bottom: 2%;
    }
    &:nth-of-type(4){
      margin-bottom: 9%;
    }
  }
  &_title {
    margin-bottom: 4%;
    font-size: 2.5rem;
    position: relative;
    &::before {
      content: "";
      width: 25%;
      height: 4rem;
      background-color: $colour-accent;
      border-radius: 0 1rem 1rem 0;
      position: absolute;
      left: -30%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
