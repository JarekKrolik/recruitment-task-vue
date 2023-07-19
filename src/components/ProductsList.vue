<template>
  <div class="main__products">
    <h3 class="text">products list</h3>
    <ul class="main__products-list">
      <ListItem v-for="product of listOfProducts" :key="product.id" :product="product" />
    </ul>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "ProductsList",
  components: {
    ListItem,
  },
  props: {
    listOfProducts: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main__products {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  width: 98%;
  min-height: 40vh;
  border-radius: 10px;
  box-shadow: 5px 5px 10px black;
  overflow: hidden;
  background-image: url("../assets/img/wood-ge15a0cebe_640.jpg");
  background-position: center;

  h3 {
    text-align: center;
    margin: 1em 0;
    font-size: 2.2rem;
  }
  &-list {
    width: 98%;
    border: 1px solid white;
    border-radius: 10px;
    margin: 1em 0;
    box-shadow: 5px 5px 10px black;
    background-color: bisque;
  }

  &-list {
    list-style: none;
  }
}
</style>
