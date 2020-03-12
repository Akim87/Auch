<template>
  <button> {{buttonText}} </button>
</template>

<script>
export default {
  name: 'baseButton',
  props: ['buttonText'],
};

</script>

<style scoped lang="scss">
  button {
    background-color: $colour-accent;
    font-size: 1.625rem;
    border-radius: 30px;
    color: white;
    padding: 1rem 4.5rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
</style>
