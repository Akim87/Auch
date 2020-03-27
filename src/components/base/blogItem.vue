<template>
  <div class="blog-item d-flex">
    <div class="blog-item_img-holder d-flex justify-center">
      <router-link to="blog">
        <img class="blog-item_img" :src="require(`../../assets/${img}`)" alt='blog image'/>
      </router-link>
    </div>
    <div class="blog-item_info">
      <router-link to="blog">
        <h3 class="blog-item_title">{{ title }}</h3>
      </router-link>
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
    transition: ease-out 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
  &_info {
    margin: 1.5rem;
  }
  &_title {
    font-size: 2rem;
    margin: 1.5rem 0;
    line-height: 3rem;
    &:hover {
      color: $colour-accent;
    }
  }
  &_text {
    font-size: $font-size-text;
    font-family: $font-family-Lora;
  }
}
</style>
