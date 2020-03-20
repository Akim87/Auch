<template>
  <div class="support-popup d-flex flex-column">
    <button class="support-popup_close" @click="$emit('close')">свернуть</button>
    <div class="support-popup_info">
      <p class="support-popup_text">
        Если вам нравится слушать подкасты и вам хочется поддержать развитие этого проекта, это
        можно сделать следующими способами:
      </p>
      <h1 class="support-popup_title">Рассказать о подкасте друзьям</h1>
      <p class="support-popup_text">
        Поделитесь информацией про подкаст в своих социальных сетях. Если вы хотите пошерить ссылку,
        то можно оставить ссылку на сайт подкаста http://podcastvremyaperemen.ru или на ссылку для
        подписки c телефона: https://pod.link/vremyaperemen. Не забудьте про хештег
        #подкаствремяперемен
      </p>
      <h1 class="support-popup_title">Поддержать деньгами</h1>
      <p class="support-popup_text">
        Если вы хотите сказать проекту спасибо, то у меня есть страничка на Патреоне. В любой момент
        эту поддержку можно приостановить или изменить сумму. О том, что такое Патреон можно
        посмотреть в видео на странице самого Патреона.
      </p>
      <p class="support-popup_text">
        Такая поддержка помогает мне развиваться профессионально, оплачивать хостинговые сервисы,
        оборудование для записи подкастов, а также возможность больше времени уделять проекту.
      </p>
      <baseButton buttonText="Поддержать" @click.prevent="$emit('close')" />
    </div>
  </div>
</template>

<script>
import baseButton from './base/baseButton.vue';

export default {
  name: 'SupportProjectPopup',
  components: {
    baseButton,
  },
};
</script>

<style scoped lang="scss">
.support-popup {
  &_close {
    width: 15%;
    align-self: flex-end;
    border-top: 3px solid $colour-accent;
    border-bottom: 3px solid $colour-accent;
    border-left: 3px solid $colour-accent;
    border-radius: 1rem 0 0 1rem;
    font-size: 1.5rem;
    text-align: left;
    padding: 0 2%;
    line-height: 3rem;
    margin-bottom: 1%;;
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
