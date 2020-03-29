<template>
  <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.625 10.8933C11.968 11.2778 11.9646 12.2261 12.6187 12.6156L26.5068 20.8838C27.172 21.2798 28.0154 20.8024 28.0183 20.0283L28.0787 3.5964C28.0816 2.82231 27.2416 2.33859 26.5735 2.72959L12.625 10.8933Z"
      fill="#0D0D0D"
    />
    <path
      d="M1.50417 10.8933C0.847199 11.2778 0.843712 12.2261 1.49783 12.6156L15.386 20.8838C16.0512 21.2798 16.8946 20.8024 16.8975 20.0283L16.9579 3.5964C16.9607 2.82231 16.1208 2.33859 15.4527 2.72959L1.50417 10.8933Z"
      fill="#FF9A3D"
    />
  </svg>
</template>

<script>
export default {
  name: 'iconPrevTrack',
};
</script>

<style scoped lang="scss">
svg {
  & path:nth-child(1) {
    transition: all 0.5s ease;
  }
  &:hover path:nth-child(1) {
    fill: $colour-accent;
  }
}
</style>
