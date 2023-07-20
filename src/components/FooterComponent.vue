<template>
  <footer class="footer">
    <p class="footer__date"></p>
    <p class="footer__name"></p>
    <div class="footer__icon"></div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  width: 100%;
  padding: 3rem;
  background-color: rgb(26, 67, 67);
  margin-top: 2rem;
}
</style>
