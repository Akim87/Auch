<template>
  <transition name="popup">
    <div class="popup_mask">
      <div class="popup_wrapper">
        <div class="popup_container d-flex flex-column">
          <div class="popup_header">
            <h1 class="popup_title">Хотите стать автором?</h1>
            <button class="closeButton" @click="$emit('close')"></button>
          </div>
          <p class="popup_text">
            Подкасты — очень демократичное медиа. Чтобы начать записывать свой, достаточно телефона.
            Например, есть программа и одновременно платформа Anchor, в ней можно сразу после записи
            отредактировать звук и отправить на все платформы для подкастов. Главное, чтобы вам было
            что сказать.
          </p>
          <div class="input-field">
            <label for="disabled">Имя</label>
            <input type="text" class="validate" placeholder="Краткий ответ">
        </div>
          <baseButton class="popup_submit" buttonText="Отправить" @click="$emit('close')" />
        </div>
      </div>
    </div>
  </transition>
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
  &_mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  &_wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  &_container {
    width: 65%;
    margin: 0 auto;
    background-color: #fff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    border-radius: 19px;
    transition: all 0.3s ease;
    padding-bottom: 4%;
    overflow:hidden
  }

  &_header {
    background-color: $colour-accent;
    padding: 4%;
    position: relative;
  }

  &_title {
    color: white;
  }

  &_text {
    padding: 4%;
    font-size: $font-size-text;
    font-style: $font-family-Lora;
  }

  &_submit{
    align-self: center;
  }
}
  .closeButton{
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
</style>
