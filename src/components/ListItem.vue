<template>
  <li class="main__products-item">
    <div
      class="main__products-item-picture"
      :style="{
        border: `4px solid ${product.color}`,
        boxShadow: `0 0 8px ${product.color}`,
      }"
    >
      <img
        v-if="product.category === 'pet-house' && product.type === 'ground'"
        src="src\assets\img\house-pngwing.com.png"
        alt="pet house"
      />
      <img
        v-if="product.category === 'pet' && product.animalSize !== 'big'"
        :src="
          product.animalSize === 'small'
            ? 'src/assets/img/pngwing.com.png'
            : 'src/assets/img/rabbit.png'
        "
        alt="pet"
      />
      <img
        v-if="product.category === 'pet' && product.animalSize === 'big'"
        src="src\assets\img\big.png"
        alt="pet"
      />
      <img
        v-if="product.category === 'pet-house' && product.type === 'tree'"
        src="src\assets\img\feeder.png"
        alt="pet"
      />
    </div>
    <p class="text">{{ product.name }}</p>
    <p class="text">price : {{ product.priceInPln }}</p>
    <ItemDetails v-if="detailsOn" :product="product" :price="product.priceInPln" />
    <DoubleDown @click="detailsExpand" />
  </li>
</template>

<script>
import { ref } from "vue";
import DoubleDown from "../components/icons/DoubleDown.vue";
import ItemDetails from "./ItemDetails.vue";
export default {
  name: "ListItem",
  components: {
    DoubleDown,
    ItemDetails,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const detailsOn = ref(false);
    const detailsExpand = () => {
      detailsOn.value ? (detailsOn.value = false) : (detailsOn.value = true);
    };
    // const rawObject = JSON.parse(JSON.stringify(props));
    // const price = rawObject.product.priceInPln;
    // console.log(price);
    return { detailsOn, detailsExpand };
  },
};
</script>

<style lang="scss">
.main__products-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1.5em;
  border-radius: 10px;
  background-color: bisque;
  border: 1px solid black;
  &-picture {
    width: 6rem;
    height: 6rem;
    overflow: hidden;
    padding: 0.3em;
    border-radius: 50%;
    box-shadow: 0 0 12px black;
    img {
      width: 100%;
    }
  }
}
</style>
