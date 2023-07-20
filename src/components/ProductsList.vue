<template>
  <div class="main__products">
    <h3 class="text">products list</h3>
    <SelectCategoryComponent @select="handleSubmit" />
    <InputKeyWord @input="handleInput" :value="value" />
    <h2 v-if="listOfProducts.length < 1">No products on the list</h2>
    <ul class="main__products-list">
      <ListItem v-for="product of listOfProducts" :key="product.id" :product="product" />
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import ListItem from "./ListItem.vue";
import SelectCategoryComponent from "./SelectCategoryComponent.vue";
import InputKeyWord from "./InputKeyWord.vue";
export default {
  name: "ProductsList",
  emits: ["selectedCategory", "selectedKeyWord"],
  components: {
    ListItem,
    SelectCategoryComponent,
    InputKeyWord,
  },
  props: {
    listOfProducts: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    const selectedProducts = ref(null);
    const value = ref(null);
    const handleSubmit = (select) => {
      selectedProducts.value = select;
      value.value = null;
      ctx.emit("selectedCategory", selectedProducts.value);
    };
    const handleInput = (keyWord) => {
      ctx.emit("selectedKeyWord", keyWord);
    };

    return { handleSubmit, selectedProducts, handleInput, value };
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

  h3,
  h2 {
    text-align: center;
    margin: 1em 0;
    font-size: 2.5rem;
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
</style>
