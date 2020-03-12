<template>
  <transition name="popup">
    <div class="popup_mask">
      <div class="popup_wrapper">
        <div class="popup_container">
          <h1 class="popup_header">Хотите стать автором?</h1>
          <p class="popup_text">
            Подкасты — очень демократичное медиа. Чтобы начать записывать свой, достаточно телефона.
            Например, есть программа и одновременно платформа Anchor, в ней можно сразу после записи
            отредактировать звук и отправить на все платформы для подкастов. Главное, чтобы вам было
            что сказать.
          </p>
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
  }

  &_header {
    background-color: $colour-accent;
    padding: 4%;
  }

  &_text {
    padding: 4%;
    font-size: $font-size-text;
  }

  &_submit{
    
  }
}
</style>
