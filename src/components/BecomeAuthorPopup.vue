<template>
  <div class="author-popup_wrapper d-flex" @click.self="$emit('close')">
    <div class="author-popup_container">
      <div class="author-popup_header">
        <h1 class="author-popup_title">Хотите стать автором?</h1>
        <button class="author-popup_close" @click="$emit('close')"></button>
      </div>
      <p class="author-popup_text">
        Подкасты — очень демократичное медиа. Чтобы начать записывать свой, достаточно телефона.
        Например, есть программа и одновременно платформа Anchor, в ней можно сразу после записи
        отредактировать звук и отправить на все платформы для подкастов. Главное, чтобы вам было
        что сказать.
      </p>
      <form class="author-popup_form d-flex flex-column">
        <div class="author-popup_form-item d-flex flex-column">
          <label for="disabled" class="author-popup_label required">Имя</label>
          <input type="text" class="author-popup_input" placeholder="Краткий ответ" />
        </div>
        <div class="author-popup_form-item d-flex flex-column">
          <label for="disabled" class="author-popup_label required">Адрес электронной почты</label>
          <input type="text" class="author-popup_input" placeholder="Краткий ответ" />
        </div>
        <div class="author-popup_form-item d-flex flex-column">
          <label for="disabled" class="author-popup_label">Номер телефона</label>
          <input type="text" class="author-popup_input" placeholder="Краткий ответ" />
        </div>
        <baseButton class="author-popup_submit" buttonText="Отправить" @click.prevent="$emit('close')" />
      </form>
    </div>
  </div>
</template>

<script>
import baseButton from './base/baseButton.vue';

export default {
  name: 'BecomeAuthorPopup',
  components: {
    baseButton,
  },
};
</script>

<style scoped lang="scss">
.author-popup {
  &_wrapper {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
  }

  &_container {
    width: 65%;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    overflow: auto;
    border-radius: 1.25rem;
    max-height: 100vh;
    transform: translateX(25%);
    @media screen and (max-width: $mq-mob) {
      width: 90%;
      transform: translate(5%, -25%);
  }
  }

  &_header {
    background-color: $colour-accent;
    padding: 3% 4%;
    position: relative;
  }

  &_title {
    color: white;
  }

  &_close {
    position: absolute;
    top: 50%;
    right: 7%;
    transform: translateY(-50%);

    &::before,
    &::after {
      content: "";
      background-color: white;
      height: .375rem;
      width: 2rem;
      position: absolute;
    }
    &::before {
      transform: rotate(-45deg);
      top: -4px;
    }
    &::after {
      transform: rotate(45deg);
      top: -4px;
    }

    &:hover {
      &::before,
      &::after {
        background-color: black;
      }
    }
  }

  &_text {
    padding: 2% 4%;
    font-size: $font-size-text;
    font-style: $font-family-Lora;
  }

  &_form-item {
    background-color: #fff0e2;
    padding: 1% 4%;
    margin: 1% 0;
  }

  &_label {
    font-size: 1.5rem;
    margin-bottom: 1%;
  }

  &_input {
    border: none;
    border-bottom: 1px dashed #414141;
    background-color: inherit;
    font-size: $font-size-text;
  }

  &_submit {
    margin: 2% 0 3%;
    align-self: center;
  }
}

.required::after {
  content: "*";
  color: red;
  margin-left: 0.5rem;
}
</style>
