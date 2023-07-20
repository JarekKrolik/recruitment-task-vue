<template>
  <div class="main__products">
    <h3 class="text">Products List :</h3>
    <SelectCategoryComponent @select="handleSubmit" />
    <FilterComponent @currency="handleCurrency" />
    <InputKeyWord @input="handleInput" :value="value" />
    <h2 v-if="listOfProducts.length < 1">No products on the list</h2>
    <ul class="main__products-list">
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
import { checkCurrency } from "../assets/checkCurrency";
export default {
  name: "ProductsList",
  emits: ["selectedCategory", "selectedKeyWord"],
  components: {
    ListItem,
    SelectCategoryComponent,
    InputKeyWord,
    FilterComponent,
  },
  props: {
    listOfProducts: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    const selectedProducts = ref(null);
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
        currency.value = "PLN";
        currency_rate.value = 1;
      }
    };
    return {
      handleSubmit,
      selectedProducts,
      handleInput,
      value,
      currency,
      handleCurrency,
      currency_rate,
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
  }
}
@media (min-width: 1200px) {
  .main__products {
    &-list {
      width: 70%;
    }
  }
}
</style>
