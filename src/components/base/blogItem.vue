<template>
  <div class="blog-item d-flex">
    <div class="blog-item_img-holder d-flex justify-center">
      <img class="blog-item_img" src='../../assets/Rectangle 63.png' alt='blog image'/>
    </div>
    <div class="blog-item_info">
      <h3 class="blog-item_title">{{ title }}</h3>
      <p class="blog-item_text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blogItem',
  props: {
    img: String,
    title: String,
    text: String,
  },
};
</script>

<style scoped lang="scss">
.blog-item {
  background-color: #F2E2D3;
  border-radius: 2rem;

  &_img-holder {
    margin: 1.5rem;
  }
  &_img {
    object-fit: contain;
    width: 27vw;
  }
  &_info {
    margin: 1.5rem;
  }
  &_title {
    font-size: 2.625rem;
    margin: 1.5rem 0;
    line-height: 3rem;
  }
  &_text {
    font-size: $font-size-text;
    font-family: $font-family-Lora;
  }
}
</style>
