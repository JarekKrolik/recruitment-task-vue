<template>
  <div class="main">
    <HeaderComponent />
    <ProductsList
      :listOfProducts="listOfProducts"
      @selectedCategory="selectedProducts"
      @selectedKeyWord="selectedByKeyWord"
    />
    <FooterComponent />
  </div>
</template>

<script>
import { getDataFromLocalStorage } from "../assets/dataBaseMockup";
import { listOfAllProducts } from "../assets/data";
import { selectByKeyWord } from "../assets/selectByKeyWord";
import { selectCategory } from "../assets/selectCategory";
import { ref, onMounted } from "vue";
import ProductsList from "./ProductsList.vue";
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
export default {
  name: "MainComponent",
  components: {
    ProductsList,
    HeaderComponent,
    FooterComponent,
  },
  setup: () => {
    const selectedCategory = ref("all");
    const listOfProducts = ref(null);
    const productsFromStorage = getDataFromLocalStorage();
    const products = productsFromStorage ? productsFromStorage : listOfAllProducts;
    listOfProducts.value = products ? products : listOfAllProducts;
    const selectedByKeyWord = (word) => {
      const list =
        selectedCategory.value !== "all"
          ? selectCategory(selectedCategory.value, products)
          : products;
      listOfProducts.value = selectByKeyWord(word, list);
    };
    const selectedProducts = (category) => {
      selectedCategory.value = category;
      if (category !== "all") {
        listOfProducts.value = selectCategory(category, products);
      } else {
        listOfProducts.value = products;
      }
    };
    return { listOfProducts, selectedProducts, selectedByKeyWord };
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
