<template>
  <div v-for="product of listOfProducts" :key="product.id">
    <p>{{ product.name }}</p>
  </div>
</template>

<script>
import { listOfAllProducts } from "../assets/data";
import { getDataFromLocalStorage } from "../assets/dataBaseMockup";
import { ref, onMounted, toRaw } from "vue";
export default {
  name: "MainComponent",
  setup: () => {
    const listOfProducts = ref(null);
    onMounted(() => {
      const products = getDataFromLocalStorage();
      listOfProducts.value = products ? products : listOfAllProducts;
    });

    return { listOfProducts };
  },
};
</script>
<style lang="sass" scoped></style>
