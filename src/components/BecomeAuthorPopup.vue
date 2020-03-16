<template>
      <div class="popup_wrapper d-flex">
        <div class="popup_container">
          <div class="popup_header">
            <h1 class="popup_title">Хотите стать автором?</h1>
            <button class="popup_close" @click="$emit('close')"></button>
          </div>
          <p class="popup_text">
            Подкасты — очень демократичное медиа. Чтобы начать записывать свой, достаточно телефона.
            Например, есть программа и одновременно платформа Anchor, в ней можно сразу после записи
            отредактировать звук и отправить на все платформы для подкастов. Главное, чтобы вам было
            что сказать.
          </p>
          <form class="popup_form d-flex flex-column">
            <div class="popup_form-item d-flex flex-column">
              <label for="disabled" class="popup_label required">Имя</label>
              <input type="text" class="popup_input" placeholder="Краткий ответ">
            </div>
            <div class="popup_form-item d-flex flex-column">
              <label for="disabled" class="popup_label required">Адрес электронной почты</label>
              <input type="text" class="popup_input" placeholder="Краткий ответ">
            </div>
            <div class="popup_form-item d-flex flex-column">
              <label for="disabled" class="popup_label">Номер телефона</label>
              <input type="text" class="popup_input" placeholder="Краткий ответ">
            </div>
            <baseButton class="popup_submit" buttonText="Отправить" @click="$emit('close')" />
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
.popup {
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
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    padding-bottom: 4%;
    overflow: auto;
    max-height: 100vh;
    border-radius: 19px;
  }

  &_header {
    background-color: $colour-accent;
    padding: 4%;
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
    &::after{
      content: '';
      background-color: white;
      height: 6px;
      width: 28px;
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
  }

  &_text {
    padding: 4%;
    font-size: $font-size-text;
    font-style: $font-family-Lora;
  }

  &_form-item {
    background-color: #FFF0E2;
    padding: 2% 4%;
    margin: 1% 0;
  }

  &_label {
    font-size: 1.875rem;
    margin-bottom: 2%;
  }

  &_input {
    border: none;
    border-bottom: 1px dashed #414141;
    background-color: inherit;
    font-size: 1.375rem;
  }

  &_submit {
    margin-top: 6%;
    align-self: center;
  }
}

.required::after {
  content: '*';
  color: red;
  margin-left: .5rem;
}

</style>
