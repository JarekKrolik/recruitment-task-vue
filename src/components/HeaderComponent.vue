<template>
  <header class="main__header">
    <h1 class="text">Wooden Pet Houses And Pets Shop</h1>
    <h2 class="text">Products Manager</h2>
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
    width: 98%;
    margin: 0.5em 0;
    font-family: "Dancing Script", cursive;
    font-size: 3.4rem;
    font-weight: 700;
    padding: 0.6em;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    box-shadow: 5px 5px 7px black;
  }
}

@media (min-width: 912px) {
  .main__header {
    background-image: url("../assets/img/wood-g77fd02f9b_1280.jpg");
    justify-content: space-around;
    background-attachment: fixed;
    min-width: 20vh;
    h1,
    h2 {
      font-size: 4.4rem;
    }
  }
}
@media (min-width: 1200px) {
  .main__header {
    justify-content: space-around;
    min-width: 30vh;
    h1,
    h2 {
      font-size: 3.6rem;
    }
  }
}
</style>
