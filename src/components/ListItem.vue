<template>
  <li class="main__products-item">
    <div class="main__products-item-picture">
      <img src="../assets/img/pngwing.com" alt="" />
      <!-- <img :src="product.category==='pet-house"?'' alt=""> -->
    </div>
    <p class="text">{{ product.name }}</p>
    <p class="text">{{ product.priceInPln }}</p>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main__products-item {
  display: flex;
  padding: 0.8em;
  border-radius: 10px;
  border: 1px solid black;
}
</style>
