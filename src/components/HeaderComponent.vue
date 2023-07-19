<template>
  <header class="main__header">
    <div class="shade"></div>
    <h1 class="text">Wooden pet houses and pets shop</h1>
    <h2 class="text">Products manager</h2>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main__header {
  position: relative;
  width: 98%;
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 2em;
  background-image: url("../assets/img/wood-ge15a0cebe_640.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  overflow: hidden;

  h1,
  h2 {
    margin: 1em 0;
    text-align: center;
  }
}
</style>
