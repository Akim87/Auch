<template>
  <span></span>
</template>

<script>
export default {
  name: 'dropDownArrow',
};

</script>

<style scoped lang="scss">
  span {
    position: relative;
    width: 1rem;
    &::after,
    &::before{
      content: '';
      background-color: black;
      height: .125rem;
      width: 1rem;
      position: absolute;
    }
    &::before {
      transform: rotate(-40deg);
      right: -.35rem;
    }
    &::after {
      transform: rotate(40deg);
      right: .35rem;
    }
  }
</style>
