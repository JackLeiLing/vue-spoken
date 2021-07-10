export default {
  install(Vue, options) {
    Vue.directive("sparkles", {
      inserted(el, binding) {
        console.log(el);
        console.log(binding);
      }
    });
  }
};
