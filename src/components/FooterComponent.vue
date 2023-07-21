<template>
  <footer class="footer">
    <p>Products Manager</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  width: 98%;
  padding: 3rem;
  background-image: url(require("../assets/img/wood-ge15a0cebe_640.jpg"));
  margin-top: 2rem;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  p {
    width: 98%;
    font-size: 3.4rem;
    font-family: "Dancing Script";
    text-align: center;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    box-shadow: 5px 5px 7px black;
  }
}

@media (min-width: 912px) {
  .footer {
    background-image: url("../assets/img/wood-g77fd02f9b_1280.jpg");
    background-attachment: fixed;
    p {
      font-size: 4.4rem;
    }
  }
}
@media (min-width: 1200px) {
  .footer {
    p {
      font-size: 3.6rem;
    }
  }
}
</style>
