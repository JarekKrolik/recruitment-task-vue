<template>
  <div class="main__products">
    <h3 class="text">Products List :</h3>
    <SelectCategoryComponent @select="handleSubmit" />
    <FilterComponent @currency="handleCurrency" :givenCurrency="currency" />
    <InputKeyWord @input="handleInput" :value="value" />
    <button @click="handleAddProduct" class="main__products-button">
      add new product
    </button>
    <Teleport to="#add">
      <AddNewProduct
        v-if="addProduct"
        @closeForm="handleAddProduct"
        @data="saveProduct"
      />
    </Teleport>
    <h2 v-if="listOfProducts.length < 1">No products on the list</h2>
    <ul v-if="!addProduct" class="main__products-list">
      <ListItem
        v-for="product of listOfProducts"
        :currency="currency"
        :key="product.id"
        :product="product"
        :currency_rate="currency_rate"
      />
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import ListItem from "./ListItem.vue";
import SelectCategoryComponent from "./SelectCategoryComponent.vue";
import FilterComponent from "./FilterComponent.vue";
import InputKeyWord from "./InputKeyWord.vue";
import AddNewProduct from "./AddNewProduct.vue";
import { checkCurrency } from "../assets/checkCurrency";
export default {
  name: "ProductsList",
  emits: ["selectedCategory", "selectedKeyWord", "saveProduct"],
  components: {
    ListItem,
    SelectCategoryComponent,
    InputKeyWord,
    FilterComponent,
    AddNewProduct,
  },
  props: {
    listOfProducts: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    const selectedProducts = ref(null);
    const addProduct = ref(false);
    const currency = ref("PLN");
    const currency_rate = ref(0);
    const value = ref("");
    const handleSubmit = (select) => {
      selectedProducts.value = select;
      value.value = null;
      ctx.emit("selectedCategory", selectedProducts.value);
    };
    const handleInput = (keyWord) => {
      ctx.emit("selectedKeyWord", keyWord);
    };
    const handleCurrency = async (curr) => {
      if (curr === "PLN") {
        currency.value = "PLN";
        return;
      }
      currency.value = curr;
      const currencyRate = await checkCurrency(curr);
      if (currencyRate !== "error") {
        currency_rate.value = currencyRate.toFixed(2);
      } else {
        currency.value = "error";
        currency_rate.value = 1;
      }
    };
    const handleAddProduct = () => {
      addProduct.value = !addProduct.value;
    };
    const saveProduct = (product) => {
      ctx.emit("saveProduct", product);
    };
    return {
      handleSubmit,
      selectedProducts,
      handleInput,
      value,
      currency,
      handleCurrency,
      currency_rate,
      addProduct,
      handleAddProduct,
      saveProduct,
    };
  },
};
</script>

<style lang="scss" scoped>
.main__products {
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

  &-button {
    padding: 1.2em;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;
    background-color: rgb(246, 200, 143);
    font-family: "Ysabeau SC", sans-serif;
    font-size: 1.6rem;
    cursor: pointer;
  }

  h3,
  h2 {
    width: 98%;
    text-align: center;
    margin: 1em 0;
    padding: 0.6em;
    font-size: 3.4rem;
    font-family: "Dancing Script";
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    box-shadow: 5px 5px 7px black;
  }
  &-list {
    width: 98%;
    border-radius: 10px;
    margin: 1em 0;
    box-shadow: 5px 5px 10px black;
  }

  &-list {
    list-style: none;
  }
}
@media (min-width: 912px) {
  .grow-enter-active {
    animation: grow-in 0.3s linear;
  }
  .grow-leave-active {
    animation: grow-in 0.3s linear reverse;
  }
  @keyframes grow-in {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  .main__products {
    background-image: url("../assets/img/wood-g77fd02f9b_1280.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    h3,
    h2 {
      font-size: 4.4rem;
    }
    &-button {
      font-size: 2.6rem;
    }
  }
}
@media (min-width: 1200px) {
  .main__products {
    &-list {
      width: 70%;
    }
    &-button {
      font-size: 2rem;
      transition: 0.3s;
      &:hover {
        background-color: black;
        color: rgb(246, 200, 143);
      }
    }

    h3,
    h2 {
      font-size: 3.6rem;
    }
  }
}
</style>
