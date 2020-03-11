module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/styles/base/variables.scss";',
      },
    },
  },
};
