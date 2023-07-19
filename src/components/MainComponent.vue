<template>
  <div class="main">
    <HeaderComponent />
    <ProductsList :listOfProducts="listOfProducts" />
  </div>
</template>

<script>
import { listOfAllProducts } from "../assets/data";
import { getDataFromLocalStorage } from "../assets/dataBaseMockup";
import { ref, onMounted } from "vue";
import ProductsList from "./ProductsList.vue";
import HeaderComponent from "./HeaderComponent.vue";
export default {
  name: "MainComponent",
  components: {
    ProductsList,
    HeaderComponent,
  },
  setup: () => {
    const listOfProducts = ref(listOfAllProducts);
    onMounted(() => {
      const products = getDataFromLocalStorage();
      listOfProducts.value = products ? products : listOfAllProducts;
    });

    return { listOfProducts };
  },
};
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1366px;
  margin: 0 auto;
  font-size: 1.6rem;
}
</style>
