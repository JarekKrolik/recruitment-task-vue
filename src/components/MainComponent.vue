<template>
  <div class="main">
    <HeaderComponent />
    <ProductsList
      :listOfProducts="listOfProducts"
      @selectedCategory="selectedProducts"
      @selectedKeyWord="selectedByKeyWord"
      @saveProduct="saveProductToDatabase"
    />
    <FooterComponent />
  </div>
</template>

<script>
import {
  getDataFromLocalStorage,
  insertProductIntoDb,
  saveDataToLocalStorage,
} from "../assets/dataBaseMockup";
import { listOfAllProducts } from "../assets/data";
import { selectByKeyWord } from "../assets/selectByKeyWord";
import { selectCategory } from "../assets/selectCategory";
import { ref } from "vue";
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
      listOfProducts.value = selectCategory(category, products);
    };
    const saveProductToDatabase = async (product) => {
      const resp = await insertProductIntoDb(product, products);
      listOfProducts.value = resp;
      saveDataToLocalStorage(resp);
    };
    return { listOfProducts, selectedProducts, selectedByKeyWord, saveProductToDatabase };
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
